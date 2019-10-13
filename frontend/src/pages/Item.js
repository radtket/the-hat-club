import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_SINGLE_ITEM_QUERY } from "../reslovers/Query";

import { ErrorMessage, UpdateItemForm } from "../components";

const Item = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>Item</h1>
      <UpdateItemForm {...data.item} />
    </div>
  );
};

export default Item;
