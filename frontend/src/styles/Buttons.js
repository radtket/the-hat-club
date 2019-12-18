import styled, { css } from "styled-components";
import { black, white, gray, red } from "../utils/colors";
import { rgba } from "../utils/helpers";

export const IconButton = styled.button`
  &:hover {
    svg {
      fill: ${gray[800]};
    }
  }

  svg {
    display: block;
    height: 18px;
    fill: ${gray[400]};
    transition: fill 0.3s;
  }
`;

export const StyledButton = styled.button`
  border-radius: 0;
  border: 1px solid transparent;
  box-shadow: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: auto;
  font-family: 'Maisonneue Bold';
  font-weight: normal;
  line-height: 1.5;
  margin-bottom: 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  ${({ fullWidth }) => fullWidth && "width: 100%;"}

  &:hover,
  &:focus {
    font-weight: normal;
    text-decoration: none;
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }

  &:active {
    cursor: pointer !important;
    outline: none !important;
  }

  ${({ color }) => {
    switch (color) {
      case "glass":
        return css`
          color: ${rgba(white, 0.75)};
          background: ${rgba(black, 0.4)};

          &:hover,
          &:focus {
            color: ${white};
            background: ${black};
          }
        `;
      case "white":
        return css`
          color: ${gray[900]};
          background: ${rgba(white, 0.8)};

          &:hover,
          &:focus {
            color: ${gray[900]};
            background: ${white};
          }
        `;
      case "white-color":
        return css`
          color: ${red[600]};
          background: ${white};

          &:hover,
          &:focus {
            color: ${gray[900]};
            background: ${white};
          }
        `;
      case "gray":
        return css`
          color: ${gray[500]};
          background: ${gray[200]};

          &:hover,
          &:focus {
            color: ${gray[700]};
            background: ${gray[300]};
          }
        `;
      case "primary":
        return css`
          color: ${white};
          background: ${red[600]};

          &:hover,
          &:focus {
            color: ${white};
            background: ${red[600]};
            opacity: 0.85;
          }
        `;
      default:
        return css`
          color: ${white};
          background: ${rgba(gray[800], 0.9)};

          &:hover,
          &:focus {
            color: ${rgba(white, 0.85)};
            background: ${rgba(black, 0.7)};
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          padding: 6px 17px;
          font-size: 11px;
          letter-spacing: 1px;
        `;
      case "md":
        return css`
          padding: 8px 37px;
          font-size: 12px;
          letter-spacing: 2px;
        `;
      case "lg":
        return css`
          padding: 12px 45px;
          font-size: 13px;
          letter-spacing: 2px;
        `;
      default:
        return css`
          padding: 4px 13px;
          font-size: 11px;
          letter-spacing: 2px;
        `;
    }
  }}

  ${({ border }) => {
    switch (border) {
      case true:
        return css`
          color: ${gray[900]};
          border: 1px solid ${gray[900]};
          background: transparent;

          &:hover,
          &:focus {
            color: ${white};
            border-color: transparent;
            background: ${black};
          }
        `;
      case "primary":
        return css`
          color: ${red[600]};
          border: 1px solid ${red[600]};
          background: transparent;

          &:hover,
          &:focus {
            color: ${white};
            border-color: transparent;
            background: ${red[600]};
          }
        `;
      case "white":
        return css`
          color: ${white};
          border: 1px solid ${rgba(white, 0.75)};
          background: transparent;

          &:hover,
          &:focus {
            color: ${gray[900]};
            border-color: transparent;
            background: ${white};
          }
        `;
      default:
        return "";
    }
  }}
`;

export const StyledWishlistButton = styled(IconButton)`
  svg {
    .stroke,
    .fill {
      transition: fill 0.3s;
    }

    .stroke {
      fill: ${gray[400]};
    }

    .fill {
      fill: transparent;
    }
  }

  &:hover {
    svg {
      .stroke {
        fill: ${gray[800]};
      }
    }
  }

  &.active {
    svg {
      .stroke,
      .fill {
        fill: ${red[400]};
      }
    }
    &:hover {
      svg {
        .stroke,
        .fill {
          fill: ${red[300]};
        }
      }
    }
  }
`;

export const StyledNavigationArrowButton = styled.button`
  height: ${({ size }) => `${size}`};
  opacity: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;
  z-index: 99;

  &:hover {
    svg {
      fill: ${black};
    }
  }

  &.slide-prev {
    left: -24px;
  }

  &.slide-next {
    right: -24px;
  }

  svg {
    display: block;
    fill: ${gray[700]};
    height: ${({ size }) => `${size}`};
  }
`;
