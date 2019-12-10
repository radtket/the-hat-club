import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-apollo";
import PropTypes from "prop-types";
import { PAGINATION_QUERY } from "../reslovers/Query";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const PaginationStyles = styled.div`
  align-content: center;
  align-items: stretch;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  margin: 2rem 0;
  text-align: center;

  & > * {
    border-right: 1px solid #d3d3d3;
    margin: 0;
    padding: 15px 30px;

    &:last-child {
      border-right: 0;
    }
  }

  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
`;

const Pagination = ({ page, perPage }) => {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { count } = data.itemsConnection.aggregate;
  const pages = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Link
        aria-disabled={page <= 1}
        className="prev"
        disabled={page <= 1}
        to={{
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
        disabled={page >= pages}
        to={{
          search: `?page=${page + 1}`,
        }}
      >
        Next →
      </Link>
    </PaginationStyles>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
};

Pagination.defaultProps = {
  page: 1,
  perPage: 4,
};

export default Pagination;
