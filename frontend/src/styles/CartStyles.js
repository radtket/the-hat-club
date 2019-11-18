import styled from "styled-components";
import { position, padding, size, triangle } from "polished";

export const CartOverlay = styled.div`
  ${position("fixed", 0)};
  ${size(0)}
  background: rgba(241, 241, 241, 0.73);
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease 0s;

  ${({ isCartOpen }) =>
    isCartOpen &&
    `
    width: 100%;
    height: 100%;
    visibility: visible;
    opacity: 1;
  `}
`;

const CartStyles = styled.aside`
  ${position("fixed", 0, 0, 0, null)};
  ${size("100%", "500px")}
  background: #333;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
  overflow: hidden;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 12;
  ${({ open }) => open && `transform: translateX(0);`};

  @media (max-width: 2100px) {
    width: 410px;
  }

  .delete-button {
    ${position("absolute", "10px", 0, null, null)};
    ${size("16px")};
    overflow: hidden;
    font-size: 0;
    line-height: 16px;
    background: none;
    border: 0;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: #a5a5a5;
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
        background: #eee;
      }
    }
  }

  .cart {
    &__container {
      ${size("100%", "auto")}
      overflow-x: hidden;
      overflow-y: scroll;
    }

    &__items {
      position: relative;
      color: #eee;
      padding: 7px 0 6px;

      &--wrap {
        ${padding("79px", "37px", "175px")}

        @media (max-width: 2100px) {
          padding-bottom: 231px;
        }
      }

      > .cart-item {
        &:last-of-type {
          border-bottom-color: transparent;
        }
      }
    }
  }

  header {
    background: #333;
    border-bottom: 1px solid #464646;
    color: #282828;
    font-size: 16px;
    left: 0;
    line-height: 1;
    overflow: hidden;
    padding: 32px 37px;
    position: absolute;
    text-align: right;
    top: 0;
    width: 100%;
    z-index: 110;

    button {
      color: #eee;
      background: transparent;
      padding: 0;
      line-height: 1;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    z-index: 102;
    padding: 0 37px 37px;
    overflow: hidden;
    background: #333;

    dl {
      ${padding("20px", 0)}
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 16px;
      line-height: 1;
      margin-bottom: 36px;
      border-top: 1px solid #464646;
      border-bottom: 1px solid #464646;
      color: #eee;
    }

    nav {
      button {
        width: 48%;
        margin-bottom: 12px;

        @media (max-width: 2100px) {
          display: block;
          width: 100%;
        }
      }
    }
  }

  .cart-item {
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    position: relative;
    border-bottom: 1px solid #464646;

    &__image {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 80px;
    }

    &__desc {
      margin-left: 24px;
      width: calc(100% - 80px);
      color: #eee;

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
  }

  .input-group {
    display: flex;
    color: #a5a5a5;

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
      color: #a5a5a5;
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
        position: relative;
        font-size: 0;
        line-height: 24px;
        background: transparent;
        vertical-align: top;

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          margin-top: -7px;
          transition: border-color 0.2s ease;
        }

        &.minus {
          &:hover {
            &::before {
              border-right-color: #eee;
            }
          }
          &::before {
            ${triangle({
              pointingDirection: "left",
              width: "10px",
              height: "10px",
              foregroundColor: "#a5a5a5",
            })}
          }
        }

        &.add {
          &:hover {
            &::before {
              border-left-color: #eee;
            }
          }
          &::before {
            ${triangle({
              pointingDirection: "right",
              width: "10px",
              height: "10px",
              foregroundColor: "#a5a5a5",
            })}
          }
        }
      }
    }
  }
`;

export default CartStyles;
