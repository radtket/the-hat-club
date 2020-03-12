import React, { useState } from "react";
import { useMutation } from "react-apollo";
import PropTypes from "prop-types";
import { RESET_MUTATION } from "../reslovers/Mutation";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import TextField from "./TextField";
import Form from "../styles/Form";

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
            autoComplete="off"
            label="Password"
            name="password"
            onChange={handleChange("password")}
            required
            type="password"
            value={values.password}
          />

          <TextField
            autoComplete="off"
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleChange("confirmPassword")}
            required
            type="password"
            value={values.confirmPassword}
          />

          <SubmitButton {...{ loading }} />
        </fieldset>
      </Form>
    </div>
  );
};

PasswordReset.propTypes = {
  resetToken: PropTypes.string,
};

PasswordReset.defaultProps = {
  resetToken: "",
};

export default PasswordReset;
