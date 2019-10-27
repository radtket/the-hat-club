import React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "@material-ui/core";
import { useMutation } from "react-apollo";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import { USER_LOGOUT_MUTATION } from "../reslovers/Mutation";

const Logout = ({ handleClose }) => {
  const [logout] = useMutation(USER_LOGOUT_MUTATION, {
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <MenuItem
      onClick={async () => {
        await logout();
        await handleClose();
      }}
    >
      Logout
    </MenuItem>
  );
};

Logout.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Logout;
