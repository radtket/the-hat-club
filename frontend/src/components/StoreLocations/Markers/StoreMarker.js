import React from "react";
import PropTypes from "prop-types";
import Address from "../../Address";
import { MapPinIcon } from "../../Icons";
import { StyledPopup, StyledMarker } from "../../../styles/StoreLocations";
import {
  convertState,
  formatPhoneNumber,
  URLify,
} from "../../../utils/helpers";

const StoreMarker = ({
  isActive,
  onClick,
  name,
  address,
  city,
  state,
  zip,
  phone,
  distance,
  coordinates,
  iconHeight,
}) => {
  return (
    <>
      <StyledMarker anchor="bottom" {...{ coordinates, onClick, iconHeight }}>
        <button type="button">
          <MapPinIcon />
        </button>
      </StyledMarker>
      {isActive && (
        <StyledPopup
          {...{ coordinates }}
          anchor="bottom"
          offset={[0, -(iconHeight + 10)]}
        >
          <h3>{name}</h3>
          <ul>
            <li>
              <Address
                {...{
                  street: address,
                  city,
                  state: convertState(state),
                  zip,
                }}
              />
            </li>
            <li>
              <a href={`tel:${formatPhoneNumber(phone)}`}>{phone}</a>
            </li>
            {distance && (
              <li>
                <a
                  href={`https://www.google.com/maps/dir/Current+Location/${URLify(
                    `${city} ${state} ${zip} United States`
                  )}`}
                >
                  {Math.round(distance * 100) / 100} miles away
                </a>
              </li>
            )}
          </ul>
        </StyledPopup>
      )}
    </>
  );
};

StoreMarker.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  distance: PropTypes.number,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  iconHeight: PropTypes.number,
};

StoreMarker.defaultProps = {
  distance: null,
  iconHeight: 28,
};

export default StoreMarker;
