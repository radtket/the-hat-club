import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "@material-ui/core";

import { ALL_ITEMS_QUERY } from "../reslovers/Query";
import { useRouteQuery } from "../utils/helpers";
import {
  ProductCard,
  Pagination,
  ErrorMessage,
  SearchBar,
} from "../components";
import { perPage } from "../utils/constants";
import PageTitle from "../components/PageTitle";

const Shop = () => {
  const page = parseInt(useRouteQuery("page") || 1, 10);

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
      <PageTitle title="Shop" />
      <div className="container">
        <SearchBar />
        <Grid container spacing={3}>
          {data.items.map(item => (
            <Grid key={item.id} item xs={4}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
        <Pagination {...{ page, perPage }} />
      </div>
    </>
  );
};

export default Shop;
