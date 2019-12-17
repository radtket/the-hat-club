import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_ITEMS_QUERY } from "../../../reslovers/Query";
import { ErrorMessage, UserSellingTable } from "../../../components";

const Selling = () => {
  const { data, loading, error } = useQuery(ALL_ITEMS_QUERY);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return <UserSellingTable {...data} />;
};

export default Selling;
