import React from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { position, size } from "polished";
import styled from "styled-components";
import Button from "./Button";
import { PlusIcon, PhotoPlaceholderIcon, CloseIcon } from "./Icons";

const Styles = styled.div`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;

  .left,
  .right {
    display: flex;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }

  .left {
    align-items: center;
    border-bottom: 1px solid #ddd;
    flex-grow: 1;
    justify-content: center;
    text-align: center;
  }

  .right {
    width: 400px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
      ${size("200px", "50%")}
      align-items: center;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      display: flex;
      justify-content: center;
      position: relative;
      text-align: center;

      figure {
        ${size("100%")}
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin: 12px;
      }

      span {
        svg {
          height: 20px;
        }

        p {
          margin: 0;
        }
      }
    }
  }
`;

const AddPhotosButton = styled.button`
  font-size: 16px;
  text-align: center;

  svg {
    display: block;
    height: 20px;
    margin: 0 auto 12px;
  }
`;

const CloseButton = styled.button`
  ${position("absolute", "6px", "6px", null, null)}
  ${size("24px", "100%")}
  background: #bada55;
  border-radius: 50%;
  display: block;
  max-width: 24px;
  padding: 0;

  svg {
    ${size("10px", "100%")}
    display: block;
  }
`;

const ThumbnailPlaceholder = styled(PhotoPlaceholderIcon)`
  height: 33%;
  display: block;
`;

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
              <CloseButton
                onClick={e => {
                  e.preventDefault();

                  setFiles(prev =>
                    prev.filter(file => file.name !== files[i].name)
                  );
                }}
                type="button"
              >
                <CloseIcon />
              </CloseButton>
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
              <AddPhotosButton
                disabled={files.length >= NumberOfPhotos}
                onClick={open}
                type="button"
              >
                <PlusIcon />
                Add Photos
              </AddPhotosButton>
            </li>
          );
          break;
        default:
          items.push(
            <li key={i}>
              <ThumbnailPlaceholder />
            </li>
          );
      }
    }

    return items;
  };

  return (
    <Styles>
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
    </Styles>
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
