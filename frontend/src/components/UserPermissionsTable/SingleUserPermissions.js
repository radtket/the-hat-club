import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Button, Checkbox, TableCell, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import { possiblePermissions } from "../../utils/constants";
import { UPDATE_PERMISSIONS_MUTATION } from "../../reslovers/Mutation";
import ErrorMessage from "../ErrorMessage";
import { ALL_USERS_QUERY } from "../../reslovers/Query";

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
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell>{email}</TableCell>
      {possiblePermissions.map(permission => (
        <TableCell key={permission}>
          <Checkbox
            checked={permissions.includes(permission)}
            inputProps={{
              "aria-label": "primary checkbox",
            }}
            onChange={handlePermissionChange}
            value={permission}
          />
        </TableCell>
      ))}
      <TableCell>
        <Button
          color="primary"
          disabled={loading}
          onClick={updatePermissions}
          variant="contained"
        >
          Updat{loading ? "ing" : "e"}
        </Button>
      </TableCell>
    </TableRow>
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
