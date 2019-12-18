import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Flex, Box } from "@rebass/grid";
import { ALL_ITEMS_QUERY } from "../reslovers/Query";
import {
  ErrorMessage,
  FilterNav,
  HomeSlider,
  Loading,
  PageSection,
  Pagination,
  SingleItem,
  // ProductCard,
  // SearchBar,
} from "../components";
import { useRouteQuery } from "../utils/helpers";
import { perPage } from "../utils/constants";

const Shop = () => {
  const [tagArg, setTagArg] = useState({});
  const page = parseInt(useRouteQuery("page") || 1, 10);

  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      where: tagArg,
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
        <FilterNav {...{ tagArg, setTagArg }} />
        <Flex flexWrap="wrap">
          {data.items.map(item => (
            <Box key={item.id} px={3} width={1 / 3}>
              <SingleItem {...item} />
              {/* <SingleItemSlideOutNav {...item} /> */}
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
