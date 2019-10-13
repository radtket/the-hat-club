import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-apollo";
import { parse } from "graphql";
import { PAGINATION_QUERY } from "../reslovers/Query";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid lightgrey;
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid lightgrey;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
`;

const Pagination = ({ page }) => {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  console.log("yoooooo", { page });
  if (loading) {
    return <h1>Loading</h1>;
  }

  const { count } = data.itemsConnection.aggregate;
  const pages = count / parseInt(process.env.REACT_APP_PAGINATION_PER_PAGE, 10);

  console.log(data.itemsConnection.aggregate.count);
  return (
    <PaginationStyles>
      <Link
        aria-disabled={page <= 1}
        className="prev"
        to={{
          pathname: "/items",
          search: `?page=${page - 1}`,
        }}
      >
        ← Prev
      </Link>
      <p>
        Page {page} of {pages}!
      </p>
      <p>{count} Items Total</p>
      <Link
        aria-disabled={page >= pages}
        className="prev"
        to={{
          // pathname: "/items",
          search: `?page=${page + 1}`,
        }}
      >
        Next →
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
