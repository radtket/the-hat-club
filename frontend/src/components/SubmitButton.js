import React from "react";
import { Button, makeStyles, Box, CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SubmitButton = ({ loading: isLoading }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(isLoading);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Box display="inline-block" margin={1} position="relative">
      <Button
        className={buttonClassname}
        color="primary"
        disabled={loading}
        onClick={handleButtonClick}
        type="submit"
        variant="contained"
      >
        Sav{loading ? "ing" : "e"} Changes
      </Button>
      {loading && (
        <CircularProgress className={classes.buttonProgress} size={24} />
      )}
    </Box>
  );
};

SubmitButton.propTypes = {
  loading: PropTypes.bool,
};

SubmitButton.defaultProps = {
  loading: false,
};

export default SubmitButton;
