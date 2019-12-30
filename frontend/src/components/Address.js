import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAddress = styled.address`
  font-style: normal;
  line-height: 1.6;
`;

const Address = ({ name, street, city, state, zip, ...props }) => {
  return (
    <StyledAddress {...props}>
      {name && (
        <>
          {name} <br />
        </>
      )}
      {street.trim()}
      <br />
      {`${city.trim()}, ${state.trim()} ${zip.trim()}`}
    </StyledAddress>
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
