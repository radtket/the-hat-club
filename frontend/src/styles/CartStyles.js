import styled from "styled-components";
import { position, padding, size, triangle } from "polished";
import { Link } from "react-router-dom";
import { black, gray, red, white } from "../utils/colors";
import { rgba } from "../utils/helpers";

export const CartTableImage = styled(Link)`
  display: inline-block;

  img {
    display: inline-block;
    vertical-align: middle;
    -ms-interpolation-mode: bicubic;
  }
`;

export const CartOverlay = styled.div`
  ${position("fixed", 0)};
  ${size(0)}
  background: ${rgba(gray[200], 0.73)};
  opacity: 0;
  transition: opacity 0.2s ease 0s;
  visibility: hidden;
  z-index: 10;

  ${({ isCartOpen }) =>
    isCartOpen &&
    `
    width: 100%;
    height: 100%;
    visibility: visible;
    opacity: 1;
  `}
`;

export const CartHeader = styled.header`
  ${position("absolute", 0, null, null, 0)};
  background: ${gray[700]};
  border-bottom: 1px solid ${gray[700]};
  color: ${gray[800]};
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
  padding: 32px 37px;
  text-align: right;
  width: 100%;
  z-index: 110;

  button {
    background: transparent;
    color: ${gray[200]};
    line-height: 1;
    padding: 0;
  }
`;

export const CartFooter = styled.footer`
  ${position("absolute", null, null, 0, 0)};
  background: ${gray[700]};
  overflow: hidden;
  padding: 0 37px 37px;
  width: 100%;
  z-index: 102;

  dl {
    ${padding("20px", 0)}
    border-bottom: 1px solid ${gray[700]};
    border-top: 1px solid ${gray[700]};
    color: ${gray[200]};
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    line-height: 1;
    margin-bottom: 36px;
    width: 100%;
  }

  nav {
    button {
      margin-bottom: 12px;
      width: 48%;

      @media (max-width: 2100px) {
        display: block;
        width: 100%;
      }
    }
  }
`;

export const RemoveFromCartButton = styled.button`
  ${position("absolute", "10px", 0, null, null)};
  ${size("16px")};
  overflow: hidden;
  font-size: 0;
  line-height: 16px;
  background: none;
  border: 0;

  &::before,
  &::after {
    ${position("absolute", "50%", null, null, 0)};
    ${size("2px", "100%")};
    content: "";
    margin-top: -1px;
    background: ${gray[400]};
    transition: background 0.2s ease;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background: ${gray[200]};
    }
  }
`;

export const CartItemQuanityStyles = styled.label`
  display: flex;
  color: ${gray[400]};

  fieldset {
    margin-left: 12px;
    border: 0;
    padding: 0;
  }

  input {
    background: none;
    border-radius: 0;
    border: 0 none;
    box-shadow: none;
    color: ${gray[400]};
    display: inline-block;
    font-size: 16px;
    height: auto;
    line-height: inherit;
    margin: 0;
    padding: 0;
    outline: none;
    text-align: center;
    vertical-align: top;
    width: 20px;
    -webkit-appearance: none;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      appearance: none;
    }
  }

  fieldset {
    button {
      ${size("24px")}
      background: transparent;
      font-size: 0;
      line-height: 24px;
      position: relative;
      vertical-align: top;

      &::before {
        ${position("absolute", "50%", null, null, null)};
        content: "";
        display: block;
        margin-top: -7px;
        transition: border-color 0.2s ease;
      }

      &.minus {
        &:hover {
          &::before {
            border-right-color: ${gray[200]};
          }
        }

        &::before {
          ${triangle({
            pointingDirection: "left",
            width: "10px",
            height: "10px",
            foregroundColor: `${gray[400]}`,
          })}
        }
      }

      &.add {
        &:hover {
          &::before {
            border-left-color: ${gray[200]};
          }
        }
        &::before {
          ${triangle({
            pointingDirection: "right",
            width: "10px",
            height: "10px",
            foregroundColor: `${gray[400]}`,
          })}
        }
      }
    }
  }
`;

export const CartItemStyles = styled.li`
  ${padding("12px", null)}
  display: flex;
  position: relative;
  border-bottom: 1px solid ${gray[700]};

  &:last-of-type {
    border-bottom-color: transparent;
  }

  /* Image Link */
  > a {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 80px;
  }

  dl {
    margin-left: 24px;
    width: calc(100% - 80px);
    color: ${gray[200]};

    dt {
      display: block;
      font-size: 16px;

      > a {
        color: inherit;
      }
    }

    dd {
      margin-left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const CartItemsWrap = styled.div`
  ${padding("79px", "37px", "175px")}

  @media (max-width: 2100px) {
    padding-bottom: 231px;
  }
`;

export const CartItems = styled.ul`
  position: relative;
  color: ${gray[200]};
  padding: 7px 0 6px;

  > ${CartItemStyles} {
    &:last-of-type {
      border-bottom-color: transparent;
    }
  }
`;

export const CartDrawer = styled.aside`
  ${position("fixed", 0, 0, 0, null)};
  ${size("100%", "500px")}
  background: ${gray[700]};
  box-shadow: 0 0 10px 3px ${rgba(black, 0.2)};
  line-height: 1.2;
  overflow: hidden;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 12;
  ${({ open }) => open && `transform: translateX(0);`};

  @media (max-width: 2100px) {
    width: 410px;
  }

  /* Container */
  > div {
    ${size("100%", "auto")}
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const StyledDot = styled.div`
  ${size("16px")}
  ${position("absolute", 0, 0, null, null)}
  background: ${red[500]};
  border-radius: 50%;
  box-shadow: 0 2px 4px ${rgba(red[500], 0.16)}, 0 2px 4px ${rgba(
  red[500],
  0.23
)};
  color: ${white};
  display: block;
  font-feature-settings: "tnum";
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  font-weight: 100;
  line-height: 16px;
  margin: 2px;
  padding: 0;
  transform: scale(1);
  transition: 0.2s linear;
`;
