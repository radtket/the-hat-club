import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import notifier from "simple-react-notifications";
import { CREATE_ITEM_MUTATION } from "../reslovers/Mutation";

// Components
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import Form from "../styles/Form";
import TextField from "./TextField";
import TextArea from "./TextArea";

const CreateItemForm = () => {
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
            await notifier.success(`Successfully Created Item: ${title}`);
            push(`/item/${id}`);
          })
          .catch(err => {
            notifier.error(err.message);
          });
      }}
      width={1}
    >
      <ErrorMessage error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <TextField
          label="Image"
          name="file"
          onChange={uploadFile}
          placeholder="Upload an image"
          required
          type="file"
        >
          {values.image && (
            <img alt="Upload Preview" src={values.image} width="200" />
          )}
        </TextField>

        <TextField
          label="Title"
          name="title"
          onChange={handleChange("title")}
          placeholder="Upload an image"
          required
          type="text"
          value={values.title}
        />

        <TextField
          label="Price"
          name="price"
          onChange={handleChange("price")}
          placeholder="Price"
          required
          type="number"
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
      </fieldset>
    </Form>
  );
};

export default CreateItemForm;
