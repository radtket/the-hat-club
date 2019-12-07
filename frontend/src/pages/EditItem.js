import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_SINGLE_ITEM_QUERY } from "../reslovers/Query";

import { ErrorMessage, LoadingSpinner, UpdateItemForm } from "../components";

const EditItem = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <div>
      <h1>Item</h1>
      <UpdateItemForm {...data.item} />
    </div>
  );
};

export default EditItem;
