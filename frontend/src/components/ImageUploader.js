import React from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import Button from "./Button";
import { PlusIcon, CloseIcon } from "./Icons";
import {
  StyledImageUploader,
  StyledCloseButton,
  StyledAddPhotosButton,
  StyledThumbnailPlaceholder,
} from "../styles/ImageUploader";

const ImageUploader = ({ files, setFiles }) => {
  const NumberOfPhotos = 4;
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(prev =>
        prev.concat(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      );
    },
  });

  const Thumbs = () => {
    const items = [];
    for (let i = 0; i < NumberOfPhotos; i += 1) {
      switch (true) {
        case files[i] !== undefined:
          items.push(
            <li key={`${files[i].name} ${i}`}>
              <StyledCloseButton
                onClick={e => {
                  e.preventDefault();

                  setFiles(prev =>
                    prev.filter(file => file.name !== files[i].name)
                  );
                }}
                type="button"
              >
                <CloseIcon />
              </StyledCloseButton>
              <figure
                style={{
                  backgroundImage: `url('${files[i].preview}')`,
                }}
              />
            </li>
          );
          break;
        case files.length === i:
          items.push(
            <li key={i}>
              <StyledAddPhotosButton
                disabled={files.length >= NumberOfPhotos}
                onClick={open}
                type="button"
              >
                <PlusIcon />
                Add Photos
              </StyledAddPhotosButton>
            </li>
          );
          break;
        default:
          items.push(
            <li key={i}>
              <StyledThumbnailPlaceholder />
            </li>
          );
      }
    }

    return items;
  };

  return (
    <StyledImageUploader>
      <div className="left" {...getRootProps()}>
        <nav>
          <Button
            border
            disabled={files.length >= NumberOfPhotos}
            size="lg"
            type="button"
          >
            Add Photos
          </Button>
          <input {...getInputProps()} />
          <p>Add up to {NumberOfPhotos} photos</p>
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </nav>
      </div>
      <div className="right">
        <ul>
          <Thumbs />
        </ul>
      </div>
    </StyledImageUploader>
  );
};

ImageUploader.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  setFiles: PropTypes.func.isRequired,
};

ImageUploader.defaultProps = {
  files: [],
};

export default ImageUploader;
