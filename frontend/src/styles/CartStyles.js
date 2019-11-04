import styled from "styled-components";
import { cover, hideText, position, padding, size, triangle } from "polished";

const CartStyles = styled.div`
  ${position("fixed", 0, 0, 0, null)};
  ${size("100%", "40%")}
  background: #333;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  min-width: 500px;
  padding: 24px 36px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 5;
  ${({ open }) => open && `transform: translateX(0);`};

  .delete-button {
    ${position("absolute", "10px", 0, null, null)};
    /* position: relative;
    display: inline-block; */
    width: 16px;
    height: 16px;
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
      position: relative;
    }

    &__items {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }

  header {
    padding-bottom: 24px;
    border-bottom: 1px solid #464646;
    text-align: right;

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
        color: #eee;
        display: inline-block;
        width: 48%;
        padding: 12px;
        border: 1px solid #5f5f5f;
      }
    }
  }

  .cart__items {
    > .cart-item:last-of-type {
      border-bottom-color: transparent;
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
    /* display: flex;
    align-items: center; */
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
