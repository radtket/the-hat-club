import React from "react";
import PropTypes from "prop-types";
import { stringify } from "query-string";

const EmailAddress = ({ email, subject }) => {
  return (
    <a href={`mailto:${email}?${subject && stringify({ subject })}`}>{email}</a>
  );
};

EmailAddress.propTypes = {
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
};

EmailAddress.defaultProps = {
  subject: null,
};

export default EmailAddress;
