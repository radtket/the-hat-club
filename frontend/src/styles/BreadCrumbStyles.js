import styled from "styled-components";

const BreadCrumbStyles = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;

  li {
    color: #101010;
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    left: 1px;
    margin-right: 12px;
    padding-right: 12px;
    position: relative;
    text-transform: capitalize;

    &:last-child {
      margin-right: 0;
      padding-right: 0;

      &::after {
        display: none;
      }
    }

    &::after {
      color: #101010;
      content: "/";
      font-size: inherit;
      font-weight: 400;
      position: absolute;
      right: -4px;
      top: 0;
    }

    a {
      color: #7e8082;
      outline: none;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: #101010;
      }
    }
  }
`;

export default BreadCrumbStyles;
