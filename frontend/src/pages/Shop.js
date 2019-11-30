import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Flex, Box } from "@rebass/grid";
import {
  ALL_ITEMS_QUERY,
  // ALL_ITEMS_BY_TAG_QUERY
} from "../reslovers/Query";
import {
  ErrorMessage,
  HomeSlider,
  Loading,
  Pagination,
  PageSection,
  SingleItem,
  FilterNav,
  // PageTitle,
  // ProductCard,
  // SearchBar,
} from "../components";
import { useRouteQuery } from "../utils/helpers";
import { perPage } from "../utils/constants";

const Shop = () => {
  const page = parseInt(useRouteQuery("page") || 1, 10);
  const [tag, setTag] = useState("ALL");

  // const { loading, error, data } = useQuery(ALL_ITEMS_BY_TAG_QUERY, {
  //   variables: {
  //     tag,
  //   },
  // });

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
        <FilterNav {...{ tag, setTag }} />
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
