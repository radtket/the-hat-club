import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useMutation } from "react-apollo";
import { REQUEST_RESET_MUTATION } from "../reslovers/Mutation";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";

const RequestPasswordReset = () => {
  const defaultValues = {
    email: "",
  };

  const [values, setValues] = useState({
    ...defaultValues,
  });

  const [requestReset, { error, loading, called }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: {
        ...values,
      },
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
      <h1>Request a Password Reset</h1>
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
          label="Email"
          margin="normal"
          onChange={handleChange("email")}
          required
          type="email"
          value={values.email}
        />
        <SubmitButton {...{ loading }} />
      </form>
    </div>
  );
};

export default RequestPasswordReset;
