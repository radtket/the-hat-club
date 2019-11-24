import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import notifier from "simple-react-notifications";
import { Flex, Box } from "@rebass/grid";
import { CREATE_ITEM_MUTATION } from "../reslovers/Mutation";

// Components
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import Form from "../styles/Form";
import RadioButton from "./RadioButton";
import Select from "./Select";
import TextArea from "./TextArea";
import TextField from "./TextField";

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
    tag: "NFL",
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
    <>
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
          <Flex
            aria-busy={loading}
            component="fieldset"
            disabled={loading}
            flexWrap="wrap"
          >
            <Box px={2} width={1}>
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
            </Box>

            <Box px={2} width={1}>
              <TextField
                label="What are you selling?"
                name="title"
                onChange={handleChange("title")}
                placeholder="Item Name"
                required
                type="text"
                value={values.title}
              />
            </Box>
            <Box px={2} width={1}>
              <Select
                label="Category"
                name="tag"
                onChange={handleChange("tag")}
                options={["NFL", "MLB"]}
                placeholder="Choose one"
                required
                type="text"
                value={values.tag}
              />
            </Box>
            <Box px={2} width={1 / 2}>
              <TextField
                label="Price"
                name="price"
                onChange={handleChange("price")}
                placeholder="Price"
                required
                type="number"
                value={values.price}
              />
            </Box>

            <Box px={2} width={1 / 2}>
              <fieldset>
                <legend>Condition</legend>
                <div className="radio row">
                  <RadioButton
                    label="New"
                    name="New"
                    onChange={handleChange("new")}
                    value={values.new}
                  />
                  <RadioButton
                    label="Used"
                    name="Used"
                    onChange={handleChange("used")}
                    value={values.used}
                  />
                </div>
              </fieldset>
            </Box>

            <Box px={2} width={1}>
              <TextArea
                label="Description"
                name="description"
                onChange={handleChange("description")}
                placeholder="Enter A Description"
                required
                value={values.description}
              />
            </Box>
            <Box
              px={2}
              style={{
                textAlign: "right",
              }}
              width={1}
            >
              <Button disabled={loading} size="lg" type="submit">
                List Item
              </Button>
            </Box>
          </Flex>
        </fieldset>
      </Form>
    </>
  );
};

export default CreateItemForm;
