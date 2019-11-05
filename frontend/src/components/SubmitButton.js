import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const SubmitButton = ({ loading }) => {
  return (
    <Button size="lg" type="submit">
      Sav{loading ? "ing" : "e"} Changes
    </Button>
  );
};

SubmitButton.propTypes = {
  loading: PropTypes.bool,
};

SubmitButton.defaultProps = {
  loading: false,
};

export default SubmitButton;
