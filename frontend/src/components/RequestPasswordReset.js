import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { REQUEST_RESET_MUTATION } from "../reslovers/Mutation";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import TextField from "./TextField";
import Form from "../styles/Form";

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
    <>
      {!error && !loading && called && (
        <p>Success! Check your email for a reset link! </p>
      )}
      <Form
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
        <fieldset aria-busy={loading} disabled={loading}>
          <TextField
            label="Email"
            name="email"
            onChange={handleChange("email")}
            type="email"
            value={values.email}
          />
          <Button disabled={loading} size="lg" type="submit">
            Reset Password
          </Button>
        </fieldset>
      </Form>
    </>
  );
};

export default RequestPasswordReset;
