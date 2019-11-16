import React from "react";
import { useQuery } from "@apollo/react-hooks";

import styled from "styled-components";
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
import Loading from "../components/Loading";

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

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
      <PageTitle title="Shop" />
      <div className="container">
        <SearchBar />
        <ItemsList>
          {data.items.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ItemsList>
        <Pagination {...{ page, perPage }} />
      </div>
    </>
  );
};

export default Shop;
