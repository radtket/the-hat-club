import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Flex, Box } from "@rebass/grid";
import { ALL_ITEMS_QUERY } from "../reslovers/Query";
import {
  ErrorMessage,
  HomeSlider,
  Loading,
  PageTitle,
  Pagination,
  ProductCard,
  SearchBar,
} from "../components";
import { useRouteQuery } from "../utils/helpers";
import { perPage } from "../utils/constants";

const Shop = () => {
  const page = parseInt(useRouteQuery("page") || 1, 10);

  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  return (
    <>
      <HomeSlider />
      <PageTitle title="Shop" />
      <div className="container">
        <SearchBar />
        <Flex>
          {data.items.map(item => (
            <Box key={item.id} px={2} width={1 / 3}>
              <ProductCard {...item} />
            </Box>
          ))}
        </Flex>
        <Pagination {...{ page, perPage }} />
      </div>
    </>
  );
};

export default Shop;
