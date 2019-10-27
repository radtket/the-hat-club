import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useMutation } from "react-apollo";
import SubmitButton from "../components/SubmitButton";
import { USER_SIGNUP_MUTATION } from "../reslovers/Mutation";
import ErrorMessage from "../components/ErrorMessage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Signup = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState({
    ...defaultValues,
  });

  const [signup, { error, loading }] = useMutation(USER_SIGNUP_MUTATION, {
    variables: {
      ...values,
    },
  });

  const handleChange = name => ({ target }) => {
    setValues(prev => {
      return {
        ...prev,
        [name]: target.value,
      };
    });
  };

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

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
