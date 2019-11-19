import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Jump = styled.h1`
  cursor: pointer;

  @keyframes jumphover {
    0% {
      transform: translate3d(0, 0, 0);
    }

    10% {
      transform: translate3d(0, -15%, 0);
    }

    20% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  &:hover {
    span {
      animation: jumphover 2s 1 alternate;
    }
  }

  span {
    position: relative;
    display: inline-block;
  }
`;

const TextWave = ({ text }) => {
  return (
    <Jump>
      {[...text].map((letter, i) => {
        return (
          <span
            key={`${letter} ${i}`}
            style={{
              animationDelay: `${((i + 2) * 0.5) / 10}s`,
            }}
          >
            {letter}
          </span>
        );
      })}
    </Jump>
  );
};

TextWave.propTypes = {
  text: PropTypes.string,
};

TextWave.defaultProps = {
  text: "",
};

export default TextWave;
