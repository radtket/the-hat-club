import styled from "styled-components";
import { size, margin } from "polished";
import { gray, black } from "../utils/colors";
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

const Form = styled.form`
  label {
    display: block;
    margin-bottom: 1rem;
  }

  input,
  textarea,
  select {
    ${size("48px", "100%")}
    ${margin("4px", null)}
    border: 1px solid ${gray[200]};
    display: inline-block;
    font-size: 16px;
    line-height: 1.42857143;
    padding: 10px 20px;
    transition: border-color ease-in-out 0.15s;

    &:hover {
      border-color: ${rgba(black, 0.24)};
    }

    &:focus {
      border-color: ${gray[800]};
      outline: 0;
    }
  }

  textarea {
    height: auto;
    min-height: 150px;
  }

  /* button,
  input[type="submit"] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  } */

  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }
`;

export default Form;
