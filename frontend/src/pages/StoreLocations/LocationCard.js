import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "@rebass/grid";
import Address from "../../components/Address";
import { StyledLocationCard } from "../../styles/StoreLocations";
import { formatPhoneNumber, URLify, convertState } from "../../utils/helpers";
import IconListItem from "./IconListItem";
import { DirectionsMapIcon, PhoneIcon } from "../../components/Icons";

const LocationCard = ({
  id,
  name,
  address,
  city,
  state,
  zip,
  phone,
  distance,
}) => {
  return (
    <StyledLocationCard className="preferred storepoint-location" {...{ id }}>
      <h3>{name}</h3>
      <Flex
        justifyContent="space-between"
        style={{
          lineHeight: 1.6,
          maxWidth: "400px",
        }}
      >
        <Box>
          <Address
            {...{
              street: address,
              city,
              state: convertState(state),
              zip,
            }}
          />
          {distance && (
            <p className="distance">
              {distance.toFixed(1)} miles away from you
            </p>
          )}
        </Box>
        <Box>
          <IconListItem
            href={`tel:${formatPhoneNumber(phone)}`}
            icon={<PhoneIcon />}
            label="Phone number:"
            text={phone}
          />
          <IconListItem
            href={`https://www.google.com/maps/dir/Current+Location/${URLify(
              `${city} ${state} ${zip} United States`
            )}`}
            icon={<DirectionsMapIcon />}
            label="Directions:"
            text="Get Directions"
          />
        </Box>
      </Flex>
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
  distance: PropTypes.number,
};

LocationCard.defaultProps = {
  distance: null,
};

export default LocationCard;
