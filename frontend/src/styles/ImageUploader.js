import styled from "styled-components";
import { position, size } from "polished";
import { PhotoPlaceholderIcon } from "../components/Icons";
import { gray, bada55 } from "../utils/colors";

export const StyledImageUploader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;

  .left,
  .right {
    display: flex;
    border-top: 1px solid ${gray[300]};
    border-left: 1px solid ${gray[300]};
  }

  .left {
    align-items: center;
    border-bottom: 1px solid ${gray[300]};
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
      border-bottom: 1px solid ${gray[300]};
      border-right: 1px solid ${gray[300]};
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

export const StyledAddPhotosButton = styled.button`
  font-size: 16px;
  text-align: center;

  svg {
    display: block;
    height: 20px;
    margin: 0 auto 12px;
  }
`;

export const StyledCloseButton = styled.button`
  ${position("absolute", "6px", "6px", null, null)}
  ${size("24px", "100%")}
  background: ${bada55};
  border-radius: 50%;
  display: block;
  max-width: 24px;
  padding: 0;

  svg {
    ${size("10px", "100%")}
    display: block;
  }
`;

export const StyledThumbnailPlaceholder = styled(PhotoPlaceholderIcon)`
  height: 33%;
  display: block;
`;
