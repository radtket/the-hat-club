import React from "react";

import styled from "styled-components";

const Styles = styled.label`
  display: inline-block;
  margin: auto;
  max-width: 280px;
  position: relative;
  width: 100%;

  .label {
    color: #9098a9;
    font-size: 16px;
    font-weight: 500;
    left: 0;
    position: absolute;
    top: 16px;
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }

  .border {
    background: #07f;
    bottom: 0;
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.15s ease;
    width: 100%;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 2px solid #c8ccd4;
    border-radius: 0;
    color: #223254;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    height: 48px;
    line-height: 1.15;
    margin: 0;
    padding: 12px 0;
    transition: all 0.15s ease;
    width: 100%;

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
