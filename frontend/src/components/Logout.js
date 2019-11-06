import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import { USER_LOGOUT_MUTATION } from "../reslovers/Mutation";

const Logout = ({ toggleMenu }) => {
  const [logout] = useMutation(USER_LOGOUT_MUTATION, {
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button
      className="link"
      onClick={async () => {
        await logout();
        await toggleMenu();
      }}
      style={{
        background: "transparent",
      }}
      type="button"
    >
      Logout
    </button>
  );
};

Logout.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Logout;
