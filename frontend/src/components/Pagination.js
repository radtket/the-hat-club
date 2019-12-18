import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import PropTypes from "prop-types";
import { PAGINATION_QUERY } from "../reslovers/Query";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import { StyledPagination } from "../styles/Navs";

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
    <StyledPagination>
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
    </StyledPagination>
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
