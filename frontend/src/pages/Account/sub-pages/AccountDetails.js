import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../../components/TextField";
import Form from "../../../styles/Form";
import { StyledAccountDetails } from "../../../styles/Pages";

const AccountDetails = ({ name, email }) => {
  const [values, setValues] = useState({
    name,
    email,
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = key => ({ target }) => {
    setValues(prev => {
      return {
        ...prev,
        [key]: target.value,
      };
    });
  };

  return (
    <StyledAccountDetails>
      <Form
        method="post"
        onSubmit={e => {
          e.preventDefault();
          console.log({ e });
        }}
      >
        <fieldset
        // aria-busy={loading}
        // disabled={loading}
        >
          <legend>Account Details</legend>
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
        </fieldset>
      </Form>
      <Form
        method="post"
        onSubmit={e => {
          e.preventDefault();
          console.log({ e });
        }}
      >
        <fieldset>
          <legend>Password change</legend>
          <TextField
            label="Current password (leave blank to leave unchanged)"
            name="password_current"
            onChange={handleChange("password")}
            required
            type="password"
            value={values.password}
          />

          <TextField
            label="New password (leave blank to leave unchanged)"
            name="newPasswordConfirm"
            onChange={handleChange("newPassword")}
            required
            type="password"
            value={values.newPassword}
          />

          <TextField
            label="Confirm new password"
            name="newPasswordConfirm"
            onChange={handleChange("newPasswordConfirm")}
            required
            type="password"
            value={values.newPasswordConfirm}
          />
        </fieldset>
      </Form>
    </StyledAccountDetails>
  );
};

AccountDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AccountDetails;
