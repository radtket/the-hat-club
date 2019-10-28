import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "@material-ui/core";

import { ALL_ITEMS_QUERY } from "../reslovers/Query";
import { useRouteQuery } from "../utils/helpers";
import { ProductCard, Pagination, ErrorMessage } from "../components";

const Shop = () => {
  const page = parseInt(useRouteQuery("page") || 1, 10);
  const perPage = parseInt(process.env.REACT_APP_PAGINATION_PER_PAGE, 10);
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <>
      <h1>Shop Page {page}</h1>
      <Grid container spacing={3}>
        {data.items.map(item => (
          <Grid key={item.id} item xs={4}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Pagination {...{ page, perPage }} />
    </>
  );
};

export default Shop;
