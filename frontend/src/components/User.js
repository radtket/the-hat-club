import React from "react";
import { NavLink } from "react-router-dom";
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
    return <NavItem name="Login" to="/signup" {...{ setIsHovering }} />;
  }

  return (
    <>
      <NavItem name="Sell" to="/sell" {...{ setIsHovering }} />
      <NavItem name="Account" to="/account" {...{ setIsHovering }} />
      <NavItem name="Cart" to="/cart" {...{ setIsHovering }} />
      <Logout {...{ toggleMenu }} />
    </>
  );
};

export default User;
