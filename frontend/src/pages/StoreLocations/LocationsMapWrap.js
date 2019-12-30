import React from "react";
import PropTypes from "prop-types";
import { getDistance, convertDistance } from "geolib";
import { StyledLocationsMapWrap } from "../../styles/StoreLocations";
import LocationsMap from "./LocationsMap";
import MapMarker from "./MapMarker";

const LocationsMapWrap = ({ stores, setStores }) => {
  const success = async ({ coords: { latitude, longitude } }) => {
    const results = await stores
      .map(item => {
        const { lat, long } = item;

        return {
          ...item,
          distance: convertDistance(
            getDistance(
              { latitude, longitude },
              {
                latitude: Number(lat),
                longitude: Number(long),
              }
            ),
            "mi"
          ),
        };
      })
      .sort(({ distance: a }, { distance: b }) => {
        if (a > b) {
          return 1;
        }

        if (a < b) {
          return -1;
        }

        return 0;
      });

    await setStores(results);
  };

  const error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  });

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
  setStores: PropTypes.func.isRequired,
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
