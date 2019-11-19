import React from "react";
import { PageTitle, PleaseSignIn, UserPermissionsTable } from "../components";

const Permissions = () => {
  return (
    <PleaseSignIn>
      <PageTitle title="Permissions" />
      <div className="container">
        <UserPermissionsTable />
      </div>
    </PleaseSignIn>
  );
};

export default Permissions;
