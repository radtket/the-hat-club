import React from "react";
import PropTypes from "prop-types";
import { StyledBigTitle } from "../styles/Typography";

const BigTitle = ({ accent, title, bgColor }) => {
  return (
    <StyledBigTitle {...{ bgColor }}>
      <div className="sec-title centered">
        <div className="big-title">{accent}</div>
        <h2>{title}</h2>
      </div>
    </StyledBigTitle>
  );
};

BigTitle.propTypes = {
  accent: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
};

BigTitle.defaultProps = {
  accent: null,
  title: null,
  bgColor: null,
};

export default BigTitle;
