import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { USER_SIGNIN_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import Form from "../styles/Form";
import TextField from "./TextField";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

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
    <div>
      <h1>SignIn</h1>
      <Form
        method="post"
        onSubmit={e => {
          e.preventDefault();
          signin().then(() => {
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
          <TextField
            label="Password"
            name="password"
            onChange={handleChange("password")}
            required
            type="password"
            value={values.password}
          />
          <SubmitButton {...{ loading }} />
        </fieldset>
      </Form>
    </div>
  );
};

export default SignIn;
