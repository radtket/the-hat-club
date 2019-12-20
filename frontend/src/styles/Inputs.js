import styled from "styled-components";
import { position, size, margin } from "polished";
import { tempColors, gray, red, white } from "../utils/colors";
import { rgba } from "../utils/helpers";

export const StyledCheckboxLabel = styled.label`
  display: block;
  padding: 10px 5px;
`;

export const StyledCoolInput = styled.label`
  display: inline-block;
  margin: auto;
  max-width: 280px;
  position: relative;
  width: 100%;

  .label {
    ${position("absolute", "16px", null, null, 0)};
    color: ${tempColors.grayDark};
    font-size: 16px;
    font-weight: 500;
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }

  .border {
    ${size("2px", "100%")};
    ${position("absolute", null, null, 0, 0)};
    background: ${tempColors.blueLite};
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.15s ease;
  }

  input {
    ${size("48px", "100%")};
    background: none;
    border: 0;
    border-bottom: 2px solid ${tempColors.grayLite};
    border-radius: 0;
    color: ${tempColors.blueDark};
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.15;
    margin: 0;
    padding: 12px 0;
    transition: all 0.15s ease;

    &:hover {
      background: ${rgba(tempColors.blueDark, 0.03)};
    }

    &:focus {
      background: none;
      outline: none;

      + span {
        color: ${tempColors.blueLite};
        transform: translateY(-26px) scale(0.75);

        + .border {
          transform: scaleX(1);
        }
      }
    }

    &:not(:placeholder-shown) + span {
      color: ${tempColors.grayAlt};
      transform: translateY(-26px) scale(0.75);
    }
  }
`;

export const StyledSelect = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:after,
  &:before {
    ${position("absolute", null, "18px", null, null)}
    content: " ";
    margin-top: -4px;
    border: 6px solid transparent;
    border-top: 8px solid ${red[200]};
    pointer-events: none;
  }

  &:after {
    top: "64px";
  }

  &:before {
    border-bottom: 8px solid ${red[200]};
    border-top: transparent;
    top: 37%;
    z-index: 10;
  }

  .form-control {
    background-color: ${white};
    border-radius: 0;
    border: 1px solid ${gray[200]};
    color: ${gray[700]};
    display: block;
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    /* line-height: normal; */
    /* box-shadow: inset 0 1px 1pxrgba(black, 0.075);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; */

    &:focus {
      border-color: ${gray[300]};
    }
  }

  .select-select {
    appearance: none;
    cursor: pointer;
    outline: 0;
    padding-right: 50px;
    position: relative;
    text-overflow: "";
    user-select: none;

    &:focus {
      border-color: ${gray[400]};
    }
  }
`;

export const StyledRadioLabel = styled.label`
  ${margin(null, "24px", 0, null)}
  cursor: pointer;
  display: inline-block !important;
  font-weight: normal;
  line-height: 48px;
  padding-left: 24px;
  position: relative;
  vertical-align: middle;

  input {
    ${position("absolute", "50%", null, null, null)}
    box-sizing: border-box;
    height: unset;
    line-height: normal;
    margin: -10px 0 0 -22px;
    padding: 0;
  }
`;

export const StyledQuanityToggle = styled.div`
  display: inline-flex;
  padding-right: 22px;
  position: relative;
  vertical-align: middle;

  .screen-reader-text,
  &.hidden {
    display: none;
  }

  .qty {
    ${size("48px", "51px")}
    background: transparent;
    border: 1px solid ${gray[700]};
    border-radius: 3px 0 0 3px;
    color: ${gray[700]};
    display: inline-flex;
    font-size: 16px;
    font-weight: 400;
    justify-content: center;
    line-height: 48px;
    margin: 0;
    max-width: 100%;
    outline: 0;
    padding: 0;
    text-align: center;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      margin: 0;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }

  .plus,
  .minus {
    ${size("24px", "23px")}
    align-items: center;
    background: transparent;
    border: 1px solid ${gray[700]};
    border-radius: 0;
    color: ${gray[700]};
    cursor: pointer;
    display: flex;
    font-weight: 400;
    justify-content: center;
    margin: 0;
    outline: 0;
    overflow: visible;
    padding: 0;
    position: absolute;
    text-decoration: none;
    text-shadow: none;
    user-select: none;
  }

  .plus {
    border-radius: 0 3px 0 0;
    height: 25px;
    line-height: 24px;
    right: 0;
    top: 0;
  }

  .minus {
    border-radius: 0 0 3px 0;
    bottom: 0;
    right: 0;
  }
`;
