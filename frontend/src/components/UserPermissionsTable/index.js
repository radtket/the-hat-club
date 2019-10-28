import React from "react";
import { useQuery } from "react-apollo";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { ALL_USERS_QUERY } from "../../reslovers/Query";
import ErrorMessage from "../ErrorMessage";
import SingleUserPermissions from "./SingleUserPermissions";
import { possiblePermissions } from "../../utils/constants";

const UserPermissionsTable = () => {
  const { data, loading, error } = useQuery(ALL_USERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          {possiblePermissions.map(permission => (
            <TableCell key={permission}>{permission}</TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.users.map(user => {
          return <SingleUserPermissions key={user.id} user={user} />;
        })}
      </TableBody>
    </Table>
  );
};

export default UserPermissionsTable;
