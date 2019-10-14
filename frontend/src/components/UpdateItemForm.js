import React, { useState, useContext } from "react";
import { useMutation } from "react-apollo";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Paper,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { UPDATE_ITEM_MUTATION } from "../reslovers/Mutation";

// Components
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { StatusSnackbarContext } from "./StatusSnackbar";

const UpdateItemForm = ({ id, title, description, price }) => {
  const { openSnackbar } = useContext(StatusSnackbarContext);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <Container maxWidth="md">
      <Box
        alignItems="center"
        component={Paper}
        display="flex"
        flexDirection="column"
        p={5}
      >
        <Box
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
                await openSnackbar({
                  message: `Successfully Updated Item: ${updatedTitle}`,
                  variant: "success",
                });
              })
              .catch(err => {
                openSnackbar({
                  message: err.message,
                  variant: "error",
                });
              });
          }}
          width={1}
        >
          <ErrorMessage error={error} />

          <TextField
            aria-busy={loading}
            autoFocus
            disabled={loading}
            fullWidth
            label="Title"
            margin="normal"
            onChange={handleChange("title")}
            required
            value={values.title}
            variant="outlined"
          />
          <TextField
            aria-busy={loading}
            autoFocus
            disabled={loading}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            label="Price"
            margin="normal"
            onChange={handleChange("price")}
            required
            value={values.price}
            variant="outlined"
          />
          <TextField
            aria-busy={loading}
            autoFocus
            disabled={loading}
            fullWidth
            label="Description"
            margin="normal"
            multiline
            onChange={handleChange("description")}
            required
            rows={4}
            value={values.description}
            variant="outlined"
          />
          <SubmitButton {...{ loading }} />
        </Box>
      </Box>
    </Container>
  );
};

UpdateItemForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default UpdateItemForm;
