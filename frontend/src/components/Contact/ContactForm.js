import React, { useState } from "react";
import { Flex, Box } from "@rebass/grid";
import TextField from "../TextField";
import TextArea from "../TextArea";
import Button from "../Button";
import Form from "../../styles/Form";

const ContactForm = () => {
  const loading = false;
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = ({ target: { name, value } }) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        console.log({ values });
      }}
    >
      <fieldset>
        <Flex
          aria-busy={loading}
          component="fieldset"
          disabled={loading}
          flexWrap="wrap"
        >
          <Box px={2} py={1} width="50%">
            <TextField
              label="Name"
              name="name"
              {...{ onChange }}
              disabled={loading}
              placeholder="What’s your name?"
              required
              type="text"
              value={values.name}
            />
          </Box>
          <Box px={2} py={1} width="50%">
            <TextField
              label="Email"
              name="email"
              {...{ onChange }}
              disabled={loading}
              placeholder="Item Name"
              required
              type="text"
              value={values.email}
            />
          </Box>
          <Box px={2} py={1} width={1}>
            <TextArea
              label="Message"
              name="message"
              {...{ onChange }}
              disabled={loading}
              placeholder="What’s up?"
              required
              value={values.description}
            />
          </Box>
          <Box px={2} py={1} width={1}>
            <Button size="lg" type="submit">
              Send message
            </Button>
          </Box>
        </Flex>
      </fieldset>
    </Form>
  );
};

export default ContactForm;
