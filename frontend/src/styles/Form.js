import styled from "styled-components";

const Form = styled.form`
  label {
    display: block;
    margin-bottom: 1rem;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid #e8e8e8;
    line-height: normal;

    &:focus {
      outline: 0;
      border-color: #262626;
    }
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
