import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { USER_SIGNUP_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import TextField from "./TextField";
import Form from "../styles/Form";

const SignUp = () => {
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
      <h1>SignUp</h1>
      <Form
        method="post"
        onSubmit={e => {
          e.preventDefault();
          signup().then(() => {
            setValues({
              ...defaultValues,
            });
          });
        }}
      >
        {" "}
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
          <SubmitButton {...{ loading }} />
        </fieldset>
      </Form>
    </div>
  );
};

export default SignUp;
