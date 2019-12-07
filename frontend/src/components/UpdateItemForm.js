import React, { useState } from "react";
import { useMutation } from "react-apollo";
import PropTypes from "prop-types";
import notifier from "simple-react-notifications";
import { UPDATE_ITEM_MUTATION } from "../reslovers/Mutation";

// Components
import ErrorMessage from "./ErrorMessage";
import Form from "../styles/Form";
import LoadingSpinner from "./LoadingSpinner";
import SubmitButton from "./SubmitButton";
import TextArea from "./TextArea";
import TextField from "./TextField";

const UpdateItemForm = ({ id, title, description, price }) => {
  const [updateItem, { error, loading }] = useMutation(UPDATE_ITEM_MUTATION);

  const [values, setValues] = useState({
    title,
    description,
    price,
  });

  const handleChange = name => ({ target }) => {
    const { value } = target;
    if (name === "price" && /^\d+$/.test(value)) {
      setValues(prev => {
        return {
          ...prev,
          [name]: parseInt(value, 10),
        };
      });
    }

    if (name !== "price") {
      setValues(prev => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <div className="container">
      <Form
        component="form"
        onSubmit={async e => {
          e.preventDefault();
          await updateItem({
            variables: {
              id,
              ...values,
            },
          })
            .then(async ({ data }) => {
              const { title: updatedTitle } = await data.updateItem;
              await notifier.success(
                `Successfully Updated Item: ${updatedTitle}`
              );
            })
            .catch(err => {
              notifier.success(err.message);
            });
        }}
        width={1}
      >
        <ErrorMessage error={error} />
        <TextField
          label="Title"
          name="title"
          onChange={handleChange("title")}
          required
          value={values.title}
        />
        <TextField
          label="Price"
          name="price"
          onChange={handleChange("price")}
          required
          value={values.price}
        />
        <TextArea
          label="Description"
          name="description"
          onChange={handleChange("description")}
          placeholder="Enter A Description"
          required
          value={values.description}
        />
        <SubmitButton {...{ loading }} />
      </Form>
    </div>
  );
};

UpdateItemForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default UpdateItemForm;
