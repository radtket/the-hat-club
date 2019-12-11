/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { black, red } from "../utils/colors";
import { rgba } from "../utils/helpers";

const ErrorStyles = styled.div`
  background: white;
  border: 1px solid ${rgba(black, 0.05)};
  border-left: 5px solid ${red[500]};
  margin: 24px 0;
  padding: 24px;

  p {
    margin: 0;
    font-weight: 100;
  }

  strong {
    margin-right: 16px;
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
