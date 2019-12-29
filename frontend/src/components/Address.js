import React from "react";
import PropTypes from "prop-types";

const Address = ({ name, street, city, state, zip, ...props }) => {
  return (
    <address {...props}>
      {name && (
        <>
          {name} <br />
        </>
      )}
      {street}
      <br />
      {city}, {state} {zip}
    </address>
  );
};

Address.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
};

Address.defaultProps = {
  name: null,
  street: null,
  city: null,
  state: null,
  zip: null,
};

export default Address;
