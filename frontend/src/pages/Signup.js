import React from "react";
import { Grid } from "@material-ui/core";
import { SignIn, SignUp, RequestPasswordReset } from "../components";

const Signup = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <SignIn />
      </Grid>
      <Grid item xs={4}>
        <SignUp />
      </Grid>
      <Grid item xs={4}>
        <RequestPasswordReset />
      </Grid>
    </Grid>
  );
};

export default Signup;
