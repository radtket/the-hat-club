import React from "react";
import { PleaseSignIn, UserPermissionsTable } from "../components";

const Permissions = () => {
  return (
    <PleaseSignIn>
      <h1>Permissions</h1>
      <UserPermissionsTable />
    </PleaseSignIn>
  );
};

export default Permissions;
