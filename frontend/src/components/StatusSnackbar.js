import React, { useState, createContext } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Box,
  IconButton,
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";
import { Error, Close, CheckCircle } from "@material-ui/icons";

const useStyles = makeStyles(({ palette, spacing }) => ({
  success: {
    backgroundColor: palette.success,
  },
  error: {
    backgroundColor: palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: spacing(1),
  },
}));

export const StatusSnackbarContext = createContext();

export const StatusSnackbarProvider = ({ children }) => {
  const classes = useStyles();
  // const { success, error, icon, iconVariant } = useStyles();

  const [values, setValues] = useState({
    isOpen: false,
    message: "",
    variant: "success",
  });

  const openSnackbar = ({ message, variant }) => {
    setValues({
      message,
      isOpen: true,
      variant,
    });
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setValues({
      ...values,
      isOpen: false,
    });
  };
  const { isOpen, message, variant } = values;

  const Icon = {
    success: CheckCircle,
    error: Error,
  }[variant];

  return (
    <StatusSnackbarContext.Provider
      value={{
        openSnackbar,
        closeSnackbar,
        snackbarIsOpen: isOpen,
        message,
        variant,
      }}
    >
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        open={isOpen}
      >
        <SnackbarContent
          action={[
            <IconButton key="close" color="inherit" onClick={closeSnackbar}>
              <Close />
            </IconButton>,
          ]}
          className={clsx(classes[variant])}
          message={
            <Box
              alignItems="center"
              component="span"
              display="flex"
              id="client-snackbar"
            >
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {message}
            </Box>
          }
        />
      </Snackbar>
      {children}
    </StatusSnackbarContext.Provider>
  );
};
