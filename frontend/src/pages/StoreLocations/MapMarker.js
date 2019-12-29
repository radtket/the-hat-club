import React from "react";
import PropTypes from "prop-types";
import { StyledMapMarker } from "../../styles/StoreLocations";

const MapMarker = ({ alt, ...props }) => (
  <StyledMapMarker {...{ ...props, alt }} />
);

MapMarker.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default MapMarker;
