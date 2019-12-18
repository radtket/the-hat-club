/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { StyledErrorMessage } from "../styles/General";

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
      <StyledErrorMessage key={`${message} ${i}`}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {message.replace("GraphQL error: ", "")}
        </p>
      </StyledErrorMessage>
    ));
  }
  return (
    <StyledErrorMessage>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </StyledErrorMessage>
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
