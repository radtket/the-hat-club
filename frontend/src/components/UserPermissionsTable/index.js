import React from "react";
import { useQuery } from "react-apollo";
import { ALL_USERS_QUERY } from "../../reslovers/Query";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import SingleUserPermissions from "./SingleUserPermissions";
import { possiblePermissions } from "../../utils/constants";
import { StyledUserPermissionsTable } from "../../styles/Tables";

const UserPermissionsTable = () => {
  const { data, loading, error } = useQuery(ALL_USERS_QUERY);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <StyledUserPermissionsTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          {possiblePermissions.map(permission => (
            <th key={permission}>{permission}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.users.map(user => {
          return <SingleUserPermissions key={user.id} user={user} />;
        })}
      </tbody>
    </StyledUserPermissionsTable>
  );
};

export default UserPermissionsTable;
