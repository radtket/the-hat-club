import React from "react";
import PropTypes from "prop-types";

import { StyledLocationsMapWrap } from "../../styles/StoreLocations";
import LocationsMap from "./LocationsMap";
import MapMarker from "./MapMarker";

const LocationsMapWrap = ({ stores }) => {
  return (
    <StyledLocationsMapWrap>
      <LocationsMap
        defaultCenter={[39.8283, -98.5795]}
        defaultZoom={10}
        onGoogleApiLoaded={({ map, maps }) => {
          // Fit map to its bounds after the api is loaded
          // Get bounds by our places
          const bounds = new maps.LatLngBounds();

          stores.forEach(({ lat, long }) => {
            bounds.extend(new maps.LatLng(lat, long));
          });

          // Fit map to bounds
          map.fitBounds(bounds);

          // Bind the resize listener
          // Re-center map when resizing the window
          maps.event.addDomListenerOnce(map, "idle", () => {
            maps.event.addDomListener(window, "resize", () => {
              map.fitBounds(bounds);
            });
          });
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        {stores.map(({ id, lat, long, address }) => (
          <MapMarker
            key={id}
            alt={address}
            lat={lat}
            lng={long}
            onClick={() => console.log("click")}
          />
        ))}
      </LocationsMap>
    </StyledLocationsMapWrap>
  );
};

LocationsMapWrap.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      phone: PropTypes.string,
      lat: PropTypes.string,
      long: PropTypes.string,
    })
  ).isRequired,
};

export default LocationsMapWrap;
