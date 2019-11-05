/* eslint-disable react/button-has-type */

import React from "react";
import styled, { css } from "styled-components";

const ButtonStyles = styled.button`
  border-radius: 0;
  border: 1px solid transparent;
  box-shadow: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: auto;
  font-weight: 400;
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
    font-weight: 400;
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
          color: rgba(255, 255, 255, 0.75);
          background: rgba(0, 0, 0, 0.4);

          &:hover,
          &:focus {
            color: #fff;
            background: #000;
          }
        `;
      case "white":
        return css`
          color: #111;
          background: rgba(255, 255, 255, 0.8);

          &:hover,
          &:focus {
            color: #111;
            background: #fff;
          }
        `;
      case "white-color":
        return css`
          color: #e41919;
          background: #fff;

          &:hover,
          &:focus {
            color: #151515;
            background: #fff;
          }
        `;
      case "gray":
        return css`
          color: #777;
          background: #e5e5e5;

          &:hover,
          &:focus {
            color: #444;
            background: #d5d5d5;
          }
        `;
      case "primary":
        return css`
          color: #fff;
          background: #e41919;

          &:hover,
          &:focus {
            color: #fff;
            background: #e41919;
            opacity: 0.85;
          }
        `;
      default:
        return css`
          color: #fff;
          background: rgba(34, 34, 34, 0.9);

          &:hover,
          &:focus {
            color: rgba(255, 255, 255, 0.85);
            background: rgba(0, 0, 0, 0.7);
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
          color: #151515;
          border: 1px solid #151515;
          background: transparent;

          &:hover,
          &:focus {
            color: #fff;
            border-color: transparent;
            background: #000;
          }
        `;
      case "primary":
        return css`
          color: #e41919;
          border: 1px solid #e41919;
          background: transparent;

          &:hover,
          &:focus {
            color: #fff;
            border-color: transparent;
            background: #e41919;
          }
        `;
      case "white":
        return css`
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.75);
          background: transparent;

          &:hover,
          &:focus {
            color: #111;
            border-color: transparent;
            background: #fff;
          }
        `;
      default:
        return "";
    }
  }}
`;

const Button = props => {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
};

export default Button;
