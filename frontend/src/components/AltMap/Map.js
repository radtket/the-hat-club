import React, { useRef } from "react";
import PropTypes from "prop-types";
import ReactMapboxGl from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { MapHeight } from "../../styles/StoreLocations";
import StoreMarker from "./StoreMarker";
import { getBbox } from "./utils";

const { distance } = require("@turf/turf");

const MapBox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY29tbW9kaXR5dmVjdG9ycyIsImEiOiJjamR3eWFvd3owcTUwMzRzNmg1eXJjYWlzIn0.QESIireyCutiiFOTlI4y5w",
  interactive: true,
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

  const mapConfig = () => {
    return {
      onStyleLoad: map => {
        mapRef.current = map;
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl,
          marker: true,
        });
        document
          .querySelector(".searchbar__container")
          .appendChild(geocoder.onAdd(map));
        geocoder.on(
          "result",
          ({
            result: {
              geometry: { coordinates },
            },
          }) => {
            setState(prev => {
              const copy = { ...prev };

              copy.stores = copy.stores
                .map(item => ({
                  ...item,
                  distance: distance(coordinates, [item.lng, item.lat], {
                    units: "miles",
                  }),
                }))
                .sort(({ distance: a }, { distance: b }) => {
                  if (a > b) {
                    return 1;
                  }
                  if (a < b) {
                    return -1;
                  }
                  return 0; // a must be equal to b
                });

              const [closestStore] = copy.stores;
              copy.activeStoreId = closestStore.id;
              // center: bounds.getCenter(),
              copy.fitBounds = getBbox(
                [closestStore.lng, closestStore.lat],
                coordinates
              );

              // map.fitBounds(
              //   getBbox([closestStore.lng, closestStore.lat], coordinates),
              //   {
              //     padding: 200,
              //   }
              // );

              return copy;
            });
          }
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

  return (
    <MapBox {...mapConfig({ fitBounds, center, zoom })}>
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
