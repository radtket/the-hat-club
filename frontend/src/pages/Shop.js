import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { Grid } from "@material-ui/core";
import { ALL_ITEMS_QUERY } from "../reslovers/Query";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { useRouteQuery } from "../utils/helpers";

const Shop = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);
  const page = parseInt(useRouteQuery("page") || 1, 10);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <h1>Shop</h1>
      <Grid container spacing={3}>
        {data.items.map(item => (
          <Grid key={item.id} item xs={4}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Pagination {...{ page }} />
    </>
  );
};

export default Shop;
