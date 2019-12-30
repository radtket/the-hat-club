import React from "react";
import PropTypes from "prop-types";
import Address from "../../components/Address";
import { StyledLocationCard } from "../../styles/StoreLocations";
import { formatPhoneNumber, URLify } from "../../utils/helpers";

const LocationCard = ({
  id,
  name,
  address,
  city,
  state,
  zip,
  phone,
  distance,
  lat,
  long,
}) => {
  return (
    <StyledLocationCard className="preferred storepoint-location" {...{ id }}>
      <h3>{name}</h3>
      <Address
        {...{
          street: address,
          city,
          state,
          zip,
        }}
      />
      <dl>
        <dt>Phone:</dt>
        <dd>
          <a href={`tel:${formatPhoneNumber(phone)}`}>{phone}</a>
        </dd>
      </dl>
      {distance && (
        <dl>
          <dt>Distance:</dt>
          <dd>{distance} miles</dd>
        </dl>
      )}
      <a
        className="google-maps-link"
        href={`https://www.google.com/maps/dir/Current+Location/${URLify(
          `${city} ${state} ${zip} United States`
        )}`}
      >
        Get Directions
      </a>
    </StyledLocationCard>
  );
};

LocationCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
  distance: PropTypes.number,
};

LocationCard.defaultProps = {
  distance: null,
};

export default LocationCard;
