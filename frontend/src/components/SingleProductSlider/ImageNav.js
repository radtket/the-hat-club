import styled from "styled-components";

const ImageNav = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  bottom: unset;
  width: 70px;
  height: 100%;

  li {
    border: none;
    cursor: pointer;
    display: block;
    float: none;
    height: auto;
    margin: 0;
    padding: 15px 0;
    transition: 0.5s;
    width: 70px;

    button {
      padding: 0;
      width: inherit;
      height: inherit;

      &:focus {
        outline: 0;
      }

      img {
        display: block;
        height: auto;
      }

      &::before {
        display: none;
      }
    }
  }
`;

export default ImageNav;
