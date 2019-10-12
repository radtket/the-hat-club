import React, { useState, useContext } from "react";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { CREATE_ITEM_MUTATION } from "../reslovers/Mutation";

// Components
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { StatusSnackbarContext } from "./StatusSnackbar";

const SellForm = () => {
  const { openSnackbar } = useContext(StatusSnackbarContext);
  const { push } = useHistory();
  const [createNewItem, { error, loading }] = useMutation(CREATE_ITEM_MUTATION);

  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    image:
      "https://i.pinimg.com/originals/a0/05/be/a005be44eaeb48187059089b9edb5634.jpg",
    largeImage:
      "https://i.pinimg.com/originals/a0/05/be/a005be44eaeb48187059089b9edb5634.jpg",
  });

  const handleChange = name => ({ target }) => {
    const { value } = target;
    setValues(prev => {
      return {
        ...prev,
        [name]: name === "price" ? parseInt(value, 10) : value,
      };
    });
  };

  if (error) {
    return <h1>Error</h1>;
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
            await createNewItem({
              variables: {
                ...values,
              },
            })
              .then(async ({ data }) => {
                const { id } = await data.createItem;
                await openSnackbar({
                  message: `Successfully Created Item: ${id}`,
                  variant: "success",
                });
                push(`/items/${id}`);
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

export default SellForm;
