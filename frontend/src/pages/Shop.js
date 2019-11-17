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
  PageSection,
  ProductCard,
  SearchBar,
} from "../components";
import { useRouteQuery } from "../utils/helpers";
import { perPage } from "../utils/constants";
import SingleItem from "../components/SingleItem";
import FilterNav from "../components/FilterNav";

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
      <PageSection className="container">
        {/* <SearchBar /> */}
        <FilterNav />
        <Flex flexWrap="wrap">
          {data.items.map(item => (
            <Box key={item.id} px={3} width={1 / 3}>
              <SingleItem {...item} />
              {/* <ProductCard {...item} /> */}
            </Box>
          ))}
        </Flex>
        <Box
          style={{
            textAlign: "center",
          }}
        >
          <Pagination {...{ page, perPage }} />
        </Box>
      </PageSection>
    </>
  );
};

export default Shop;
