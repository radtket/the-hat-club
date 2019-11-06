import React from "react";
import { PleaseSignIn, UserPermissionsTable } from "../components";
import PageTitle from "../components/PageTitle";

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
