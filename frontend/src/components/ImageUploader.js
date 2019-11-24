import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { PlusIcon, PhotoPlaceholderIcon, CloseIcon } from "./Icons";

const Styles = styled.div`
  width: 100%;
  display: flex;

  .left,
  .right {
    display: flex;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }

  .left {
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #ddd;
    flex-grow: 1;
  }

  .right {
    width: 400px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 50%;
      height: 200px;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      position: relative;

      figure {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
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

const CloseButton = styled.button`
  padding: 0;
  background: #bada55;
  height: 24px;
  max-width: 24px;
  width: 100%;
  display: block;
  border-radius: 50%;
  position: absolute;
  right: 6px;
  top: 6px;

  svg {
    height: 10px;
    width: 100%;
    display: block;
  }
`;

const ThumbnailPlaceholder = styled(PhotoPlaceholderIcon)`
  height: 33%;
  display: block;
`;

const ImageUploader = () => {
  const NumberOfPhotos = 4;
  const UploadedImagesArray = [];

  const UploadedImages = () => {
    const items = [];
    for (let i = 0; i < NumberOfPhotos; i += 1) {
      if (UploadedImagesArray[i] !== undefined) {
        items.push(
          <li key={i}>
            <CloseButton type="button">
              <CloseIcon />
            </CloseButton>
            <figure
              style={{
                backgroundImage: `url('https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3071000/altimages/ff_3071719alt1_full.jpg&w=900')`,
              }}
            />
          </li>
        );
      }

      if (UploadedImagesArray.length === i) {
        items.push(
          <li key={i}>
            <span>
              <PlusIcon />
              <p>Add Photos</p>
            </span>
          </li>
        );
      } else {
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
      <div className="left">
        <nav>
          <Button border size="lg">
            Add Photos
          </Button>
          <p>Add up to {NumberOfPhotos} photos</p>
        </nav>
      </div>
      <div className="right">
        <ul>
          <UploadedImages />
          {/* <li>
            <span>
              <PlusIcon />
              <p>Add Photos</p>
            </span>
          </li>
          <li>
            <CloseButton type="button">
              <CloseIcon />
            </CloseButton>
            <figure
              style={{
                backgroundImage: `url('https://res.cloudinary.com/de3t9r4ky/image/upload/v1574621102/sickfits/moeaqiaz69r3oxedhjnk.jpg')`,
              }}
            />
          </li>
          <li>
            <ThumbnailPlaceholder />
          </li>
          <li>
            <ThumbnailPlaceholder />
          </li> */}
        </ul>
      </div>
    </Styles>
  );
};

export default ImageUploader;
