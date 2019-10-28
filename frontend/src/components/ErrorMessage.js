/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) {
    return null;
  }

  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map(({ message }, i) => (
      <ErrorStyles key={`${message} ${i}`}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {message.replace("GraphQL error: ", "")}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </ErrorStyles>
  );
};

ErrorMessage.defaultProps = {
  error: {},
};

ErrorMessage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
};

export default ErrorMessage;
