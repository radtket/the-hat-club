import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-apollo";
import { USER_SIGNUP_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import TextField from "./TextField";
import Form from "../styles/Form";
import { setFrontendCookie } from "../utils/helpers";

const SignUp = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const { push } = useHistory();
  const [values, setValues] = useState({
    ...defaultValues,
  });

  const [signup, { error, loading }] = useMutation(USER_SIGNUP_MUTATION, {
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
        signup()
          .then(({ data }) => {
            setFrontendCookie(data.signup.id);
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
          label="Name"
          name="name"
          onChange={handleChange("name")}
          required
          value={values.name}
        />
        <TextField
          label="Email"
          name="email"
          onChange={handleChange("email")}
          required
          type="email"
          value={values.email}
        />
        <TextField
          label="Password"
          name="password"
          onChange={handleChange("password")}
          required
          type="password"
          value={values.password}
        />
        <Button disabled={loading} fullWidth size="lg" type="submit">
          Register
        </Button>
      </fieldset>
    </Form>
  );
};

export default SignUp;
