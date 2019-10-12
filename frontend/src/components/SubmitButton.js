import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const SubmitButton = ({ loading }) => {
  return (
    <Button color="primary" type="submit" variant="contained">
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
