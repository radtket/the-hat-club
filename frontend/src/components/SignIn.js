import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-apollo";
import { USER_SIGNIN_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import Form from "../styles/Form";
import TextField from "./TextField";
import { ResetPasswordLink } from "../styles/Links";
import { setFrontendCookie } from "../utils/helpers";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { push } = useHistory();
  const [values, setValues] = useState({
    ...defaultValues,
  });

  const [signin, { error, loading }] = useMutation(USER_SIGNIN_MUTATION, {
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
    <Form
      method="post"
      onSubmit={e => {
        e.preventDefault();
        signin()
          .then(({ data }) => {
            setFrontendCookie(data.signin.id);
          })
          .then(() => {
            push("/");
            window.location.reload(false);
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
          required
          type="email"
          value={values.email}
        />
        <div style={{ position: "relative" }}>
          <TextField
            label="Password"
            name="password"
            onChange={handleChange("password")}
            required
            type="password"
            value={values.password}
          />
          <ResetPasswordLink to="/lost-password">Forgot?</ResetPasswordLink>
        </div>

        <Button disabled={loading} fullWidth size="lg" type="submit">
          Login
        </Button>
      </fieldset>
    </Form>
  );
};

export default SignIn;
