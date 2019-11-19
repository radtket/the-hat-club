import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_SINGLE_ITEM_QUERY } from "../reslovers/Query";
import { ErrorMessage, Product } from "../components";

const Item = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <div>
      <Product {...data.item} />
    </div>
  );
};

export default Item;
