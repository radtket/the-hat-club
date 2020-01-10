import React from "react";
import PropTypes from "prop-types";
import { formatPhoneNumber } from "../utils/helpers";

const PhoneNumber = ({ phone }) => {
  return <a href={`tel:${formatPhoneNumber(phone)}`}>{phone}</a>;
};

PhoneNumber.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default PhoneNumber;
