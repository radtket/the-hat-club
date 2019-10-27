import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-apollo";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ErrorMessage from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "../reslovers/Query";

const User = ({ styles }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY);

  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  if (!data.me) {
    return (
      <Button
        className={styles}
        color="inherit"
        component={NavLink}
        to="/signup"
      >
        Login
      </Button>
    );
  }

  return (
    <>
      <Button className={styles} color="inherit" component={NavLink} to="/sell">
        Sell
      </Button>
      <Button
        className={styles}
        color="inherit"
        component={NavLink}
        to="/orders"
      >
        Orders
      </Button>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        aria-label="account of current user"
        color="inherit"
        onClick={handleMenu}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="menu-appbar"
        keepMounted
        onClose={handleClose}
        open={open}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component={NavLink} onClick={handleClose} to="/me">
          Account
        </MenuItem>
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </>
  );
};

export default User;
