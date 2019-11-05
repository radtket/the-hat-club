import React, { useState, useContext } from "react";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import { CREATE_ITEM_MUTATION } from "../reslovers/Mutation";

// Components
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { StatusSnackbarContext } from "./StatusSnackbar";
import Form from "../styles/Form";

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
    <Form
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

      <label htmlFor="file">
        Image
        <input
          id="file"
          name="file"
          onChange={uploadFile}
          placeholder="Upload an image"
          required
          type="file"
        />
        {values.image && (
          <img alt="Upload Preview" src={values.image} width="200" />
        )}
      </label>

      <label htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          onChange={handleChange("title")}
          required
          type="text"
          value={values.title}
        />
      </label>

      <label htmlFor="price">
        Price
        <input
          id="price"
          name="price"
          onChange={handleChange("price")}
          placeholder="Price"
          required
          type="number"
          value={values.price}
        />
      </label>

      <label htmlFor="description">
        Description
        <textarea
          id="description"
          name="description"
          onChange={handleChange("description")}
          placeholder="Enter A Description"
          required
          value={values.description}
        />
      </label>
      <SubmitButton {...{ loading }} />
    </Form>
  );
};

export default CreateItemForm;
