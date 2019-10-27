import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useMutation } from "react-apollo";
import { RESET_MUTATION } from "../reslovers/Mutation";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { CURRENT_USER_QUERY } from "../reslovers/Query";

const PasswordReset = ({ resetToken }) => {
  const defaultValues = {
    password: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState({
    ...defaultValues,
  });

  const [requestReset, { error, loading, called }] = useMutation(
    RESET_MUTATION,
    {
      variables: {
        resetToken,
        ...values,
      },
      refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
    }
  );

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
      <h1>Reset Your Password</h1>
      {!error && !loading && called && (
        <p>Success! Check your email for a reset link! </p>
      )}
      <form
        method="post"
        onSubmit={e => {
          e.preventDefault();
          requestReset().then(() => {
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
          label="Password"
          margin="normal"
          onChange={handleChange("password")}
          required
          type="password"
          value={values.password}
        />
        <TextField
          aria-busy={loading}
          autoFocus
          disabled={loading}
          fullWidth
          label="Confirm Password"
          margin="normal"
          onChange={handleChange("confirmPassword")}
          required
          type="password"
          value={values.confirmPassword}
        />
        <SubmitButton {...{ loading }} />
      </form>
    </div>
  );
};

export default PasswordReset;
