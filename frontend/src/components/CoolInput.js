import React from "react";
import styled from "styled-components";
import { position, size } from "polished";

const Styles = styled.label`
  display: inline-block;
  margin: auto;
  max-width: 280px;
  position: relative;
  width: 100%;

  .label {
    ${position("absolute", "16px", null, null, 0)};
    color: #9098a9;
    font-size: 16px;
    font-weight: 500;
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }

  .border {
    ${size("2px", "100%")};
    ${position("absolute", null, null, 0, 0)};
    background: #07f;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.15s ease;
  }

  input {
    ${size("48px", "100%")};
    background: none;
    border: 0;
    border-bottom: 2px solid #c8ccd4;
    border-radius: 0;
    color: #223254;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.15;
    margin: 0;
    padding: 12px 0;
    transition: all 0.15s ease;

    &:hover {
      background: rgba(34, 50, 84, 0.03);
    }

    &:focus {
      background: none;
      outline: none;

      + span {
        color: #07f;
        transform: translateY(-26px) scale(0.75);

        + .border {
          transform: scaleX(1);
        }
      }
    }

    &:not(:placeholder-shown) + span {
      color: #5a667f;
      transform: translateY(-26px) scale(0.75);
    }
  }
`;

const CoolInput = () => {
  return (
    <Styles htmlFor="inp">
      <input id="inp" placeholder="&nbsp;" type="text" />
      <span className="label">Label</span>
      <span className="border" />
    </Styles>
  );
};

export default CoolInput;
