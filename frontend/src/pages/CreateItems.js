import React from "react";
import { useMutation } from "react-apollo";

import { CREATE_ITEMS_MUTATION } from "../reslovers/Mutation";
import { getApiData } from "../utils/helpers";

const CreateItems = () => {
  const items = [];

  getApiData(items, "NBA");

  const [createItems, { loading, error }] = useMutation(CREATE_ITEMS_MUTATION, {
    variables: {
      items,
    },
  });

  console.log({ items, loading, error });
  return (
    <div>
      <button onClick={createItems} type="button">
        Create Items
      </button>
    </div>
  );
};

export default CreateItems;
