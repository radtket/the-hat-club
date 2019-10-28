import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Link,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LogoTextPadding } from "./Branding";
import User from "./User";
import Cart from "./Cart";

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    button: {
      marginRight: spacing(2),
      "&.active": {
        textDecoration: "none",
        color: palette.primary.main,
        backgroundColor: palette.getContrastText(palette.primary.main),
      },
    },
  };
});

const Navbar = () => {
  const { palette, spacing } = useTheme();
  const { button } = useStyles();

  return (
    <>
      <AppBar
        position="static"
        style={{
          marginBottom: spacing(3),
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            color="inherit"
            component={NavLink}
            to="/"
            underline="none"
            variant="h6"
          >
            <LogoTextPadding
              fill={palette.getContrastText(palette.primary.main)}
              style={{
                height: spacing(5),
                display: "block",
              }}
            />
          </Link>
          <Box>
            <Button
              className={button}
              color="inherit"
              component={NavLink}
              to="/shop"
            >
              Shop
            </Button>
            <User styles={button} />
          </Box>
        </Toolbar>
      </AppBar>
      <Cart />
    </>
  );
};

export default Navbar;
