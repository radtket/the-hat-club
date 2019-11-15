import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-apollo";
import ErrorMessage from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import Logout from "./Logout";
import NavItem from "./NavItem";

const User = ({ setIsHovering, toggleMenu }) => {
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  if (!data.me) {
    return (
      <NavItem name="Login" to="/signup" {...{ setIsHovering, toggleMenu }} />
    );
  }

  return (
    <>
      <NavItem name="Sell" to="/sell" {...{ setIsHovering, toggleMenu }} />
      <NavItem
        name="Account"
        to="/account"
        {...{ setIsHovering, toggleMenu }}
      />
      <NavItem name="Cart" to="/cart" {...{ setIsHovering, toggleMenu }} />
      <Logout {...{ toggleMenu }} />
    </>
  );
};

User.propTypes = {
  setIsHovering: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default User;
