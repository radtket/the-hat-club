import React, { useState } from "react";
import { useMutation } from "react-apollo";

import PropTypes from "prop-types";
import { possiblePermissions } from "../../utils/constants";
import { UPDATE_PERMISSIONS_MUTATION } from "../../reslovers/Mutation";
import ErrorMessage from "../ErrorMessage";
import { ALL_USERS_QUERY } from "../../reslovers/Query";
import Button from "../Button";
import { StyledCheckboxLabel } from "../../styles/Inputs";

const SingleUserPermissions = ({ user }) => {
  const { name, email, id: userId } = user;
  const [permissions, setPermissions] = useState(user.permissions);
  const [updatePermissions, { error, loading }] = useMutation(
    UPDATE_PERMISSIONS_MUTATION,
    {
      variables: {
        permissions,
        userId,
      },
      refetchQueries: () => [{ query: ALL_USERS_QUERY }],
    }
  );

  const handlePermissionChange = ({ target }) => {
    const { checked, value } = target;
    // take a copy of the current permissions
    let updatedPermissions = [...permissions];
    // figure out if we need to remove or add this permission
    if (checked) {
      // add it in!
      updatedPermissions.push(value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        permission => permission !== value
      );
    }
    setPermissions(updatedPermissions);
  };

  if (error) {
    return (
      <tr>
        <td colSpan="8">
          <ErrorMessage {...{ error }} />
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      {possiblePermissions.map(permission => (
        <td key={permission}>
          <StyledCheckboxLabel htmlFor={`${userId}-permission-${permission}`}>
            <input
              checked={permissions.includes(permission)}
              id={`${userId}-permission-${permission}`}
              onChange={handlePermissionChange}
              type="checkbox"
              value={permission}
            />
          </StyledCheckboxLabel>
        </td>
      ))}
      <td
        style={{
          width: "100%",
          borderRight: 0,
        }}
      >
        <Button
          disabled={loading}
          fullWidth
          onClick={updatePermissions}
          type="button"
        >
          Updat{loading ? "ing" : "e"}
        </Button>
      </td>
    </tr>
  );
};

SingleUserPermissions.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    permissions: PropTypes.array,
  }).isRequired,
};

export default SingleUserPermissions;
