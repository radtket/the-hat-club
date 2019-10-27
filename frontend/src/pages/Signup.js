import React from "react";
import { Grid } from "@material-ui/core";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Signup = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <SignIn />
      </Grid>
      <Grid item xs={4}>
        <SignUp />
      </Grid>
    </Grid>
  );
};

export default Signup;
