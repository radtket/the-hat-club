import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ReactMapboxGl from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { MapHeight } from "../../styles/StoreLocations";
import StoreMarker from "./Markers/StoreMarker";
import { getStoresDetails } from "./utils";
import CurrentLocationMarker from "./Markers/CurrentLocationMarker";
import usePosition from "../../utils/hooks/usePosition";

const accessToken =
  "pk.eyJ1IjoiY29tbW9kaXR5dmVjdG9ycyIsImEiOiJjamR3eWFvd3owcTUwMzRzNmg1eXJjYWlzIn0.QESIireyCutiiFOTlI4y5w";

const MapBox = ReactMapboxGl({
  accessToken,
  interactive: true,
});

const geocoder = new MapboxGeocoder({
  mapboxgl,
  accessToken,
  marker: true,
});

const Map = ({
  setState,
  setActiveStore,
  stores,
  activeStoreId,
  fitBounds,
  center,
  zoom,
}) => {
  const mapRef = useRef();
  const { latitude, longitude } = usePosition();
  const userLocation = longitude && latitude && [longitude, latitude];

  const mapConfig = () => {
    return {
      onStyleLoad: map => {
        mapRef.current = map;

        document
          .querySelector(".searchbar__container")
          .appendChild(geocoder.onAdd(map));

        geocoder.on("result", ({ result: { geometry: { coordinates } } }) =>
          setState(prev => {
            return {
              ...prev,
              ...getStoresDetails(coordinates, prev.stores),
            };
          })
        );
      },
      style: "mapbox://styles/mapbox/light-v10",
      zoom,
      center,
      fitBounds,
      fitBoundsOptions: {
        padding: 100,
      },
      containerStyle: {
        boxSizing: "border-box",
        float: "right",
        height: MapHeight,
        width: "65%",
      },
    };
  };

  useEffect(() => {
    if (userLocation && !activeStoreId) {
      setState(prev => {
        const copy = {
          ...prev,
          ...getStoresDetails(userLocation, prev.stores),
        };
        return copy;
      });
    }
  }, [activeStoreId, setState, userLocation]);

  return (
    <MapBox {...mapConfig({ fitBounds, center, zoom, userLocation })}>
      {userLocation && <CurrentLocationMarker {...{ userLocation }} />}
      {stores.map(({ id, lat, lng, ...store }) => {
        return (
          <StoreMarker
            key={id}
            coordinates={[lng, lat]}
            isActive={id === activeStoreId}
            onClick={() => setActiveStore({ id, lat, lng })}
            {...store}
          />
        );
      })}
    </MapBox>
  );
};

Map.propTypes = {
  setState: PropTypes.func.isRequired,
  setActiveStore: PropTypes.func.isRequired,
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      phone: PropTypes.string,
      distance: PropTypes.number,
    })
  ).isRequired,
  activeStoreId: PropTypes.number,
  fitBounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Map.defaultProps = {
  activeStoreId: null,
};

export default Map;
