import styled from "styled-components";

export const IconButton = styled.button`
  &:hover {
    svg {
      fill: #282828;
    }
  }

  svg {
    display: block;
    height: 18px;
    fill: #a0a0a0;
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
    border: 1px solid #e8e8e8;
    display: inline-block;
    font-size: 16px;
    height: 48px;
    line-height: 1.42857143;
    margin-bottom: 4px;
    margin-top: 4px;
    padding: 10px 20px;
    vertical-align: middle;
    width: 100%;
    transition: border-color ease-in-out 0.15s;

    &:hover {
      border-color: rgba(0, 0, 0, 0.24);
    }

    &:focus {
      outline: 0;
      border-color: #262626;
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
