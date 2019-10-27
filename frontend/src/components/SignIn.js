import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useMutation } from "react-apollo";
import { USER_SIGNIN_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState({
    ...defaultValues,
  });

  const [signup, { error, loading }] = useMutation(USER_SIGNIN_MUTATION, {
    variables: {
      ...values,
    },
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
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
    <div>
      <h1>SignIn</h1>
      <form
        method="post"
        onSubmit={e => {
          e.preventDefault();
          signup().then(item => {
            console.log({ item }, item.signup);
            setValues({
              ...defaultValues,
            });
          });
        }}
      >
        <TextField
          aria-busy={loading}
          autoFocus
          disabled={loading}
          fullWidth
          label="Email"
          margin="normal"
          onChange={handleChange("email")}
          required
          value={values.email}
        />
        <TextField
          aria-busy={loading}
          autoFocus
          disabled={loading}
          fullWidth
          label="Password"
          margin="normal"
          onChange={handleChange("password")}
          required
          value={values.password}
        />
        <SubmitButton {...{ loading }} />
      </form>
    </div>
  );
};

export default SignIn;
