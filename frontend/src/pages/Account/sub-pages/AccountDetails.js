import React from "react";
import TextField from "../../../components/TextField";
import Form from "../../../styles/Form";

const AccountDetails = () => {
  return (
    <>
      <h2>Account Details</h2>
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
          <TextField
            label="Name"
            name="name"
            // onChange={handleChange("name")}
            required
            // value={values.name}
          />
          <TextField
            label="Email"
            name="email"
            // onChange={handleChange("email")}
            required
            type="email"
            // value={values.email}
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
            // onChange={handleChange("email")}
            required
            type="password"
            // value={values.email}
          />

          <TextField
            label="New password (leave blank to leave unchanged)"
            name="password_new_1"
            // onChange={handleChange("email")}
            required
            type="password"
            // value={values.email}
          />

          <TextField
            label="Confirm new password"
            name="password_new_2"
            // onChange={handleChange("email")}
            required
            type="password"
            // value={values.email}
          />
        </fieldset>
      </Form>
    </>
  );
};

export default AccountDetails;
