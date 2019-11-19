import React from "react";
import { useRouteQuery } from "../utils/helpers";
import { PasswordReset } from "../components";

const Reset = () => {
  const resetToken = useRouteQuery("resetToken");

  return (
    <div>
      <h1>Reset Password {resetToken}</h1>
      <PasswordReset resetToken={resetToken} />
    </div>
  );
};

export default Reset;
