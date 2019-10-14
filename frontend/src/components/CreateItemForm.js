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

const CreateItemForm = () => {
  const { openSnackbar } = useContext(StatusSnackbarContext);
  const { push } = useHistory();
  const [createNewItem, { error, loading }] = useMutation(
    CREATE_ITEM_MUTATION,
    {
      partialRefetch: true,
    }
  );

  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    largeImage: "",
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

  const uploadFile = async ({ target }) => {
    const [file] = target.files;
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );

    await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    )
      .then(res => res.json())
      .then(({ secure_url: image, eager }) => {
        const { secure_url: largeImage } = eager[0];
        return setValues(prev => ({
          ...prev,
          image,
          largeImage,
        }));
      });
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
            await createNewItem({
              variables: {
                ...values,
              },
            })
              .then(async ({ data }) => {
                const { id, title } = await data.createItem;
                await openSnackbar({
                  message: `Successfully Created Item: ${title}`,
                  variant: "success",
                });
                push(`/item/${id}`);
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
            InputLabelProps={{
              shrink: true,
            }}
            label="Image"
            margin="normal"
            onChange={uploadFile}
            required
            type="file"
            variant="outlined"
          />

          {values.image && (
            <img alt="Upload Preview" src={values.image} width="200" />
          )}

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

export default CreateItemForm;
