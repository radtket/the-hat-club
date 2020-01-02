import React from "react";
import PropTypes from "prop-types";
import { Marker, Popup } from "react-mapbox-gl";

const StoreMarker = ({
  isActive,
  onClick,
  lng,
  lat,
  id,
  name,
  address,
  city,
  state,
  zip,
  phone,
  distance,
}) => {
  const coordinates = [lng, lat];
  return (
    <>
      <Marker anchor="bottom" {...{ coordinates, onClick }}>
        <div
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "#33f",
            borderRadius: "50%",
          }}
        />
      </Marker>
      {isActive && (
        <Popup {...{ coordinates }}>
          <h1>Hi</h1>
        </Popup>
      )}
    </>
  );
};

StoreMarker.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  distance: PropTypes.number,
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
};

StoreMarker.defaultProps = {
  distance: null,
};

export default StoreMarker;
