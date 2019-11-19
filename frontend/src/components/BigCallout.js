import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  max-width: 61.5rem;
  width: calc(100% - 3rem);
  position: relative;
  margin: auto;

  h1 {
    display: block;
    font-family: "Maisonneue Bold";
    font-size: 2.8rem;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin: 3.5rem auto;
    max-width: 61.5rem;
    text-align: center;

    @media only screen and (min-width: 32rem) {
      font-size: 3.25rem;
      margin: 5rem auto;
    }

    @media only screen and (min-width: 48rem) {
      font-size: 3.7rem;
      margin: 10rem auto 7.5rem;
    }

    @media only screen and (min-width: 64rem) {
      font-size: 4.15rem;
    }

    @media only screen and (min-width: 72rem) {
      font-size: 5.6rem;
    }

    @media only screen and (min-width: 96rem) {
      font-size: 5.05rem;
    }
  }
`;

const BigCallout = ({ children }) => {
  return (
    <Styles>
      <h1>{children}</h1>
    </Styles>
  );
};

export default BigCallout;
