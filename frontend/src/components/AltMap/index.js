import React, { useState, useRef } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import stores from "../../utils/data/store-locations";
import Sidebar from "../../pages/StoreLocations/Sidebar";
import {
  StyledStoreLocations,
  Clearfix,
  MapHeight,
} from "../../styles/StoreLocations";
import LocationsSearchForm from "../../pages/StoreLocations/LocationsSearchForm";
import StoreMarker from "./StoreMarker";
import { getBbox, getBounds } from "./utils";

const { distance } = require("@turf/turf");

const MapBox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY29tbW9kaXR5dmVjdG9ycyIsImEiOiJjamR3eWFvd3owcTUwMzRzNmg1eXJjYWlzIn0.QESIireyCutiiFOTlI4y5w",
  interactive: true,
});

const AltMap = () => {
  const mapRef = useRef();
  const [state, setState] = useState({
    ...getBounds(stores),
    zoom: [14],
    stores,
    activeStoreId: null,
  });

  const setActiveStore = ({ id, lat, lng }) => {
    setState(prev => ({
      ...prev,
      activeStoreId: id,
      center: [lng, lat],
      zoom: [11],
    }));
  };

  const mapConfig = ({ fitBounds, center, zoom }) => {
    return {
      onStyleLoad: map => {
        mapRef.current = map;
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl,
          marker: true,
        });
        document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
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
                .map(item => {
                  const c = { ...item };

                  c.distance = distance(coordinates, [item.lng, item.lat], {
                    units: "miles",
                  });

                  return c;
                })
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
              // copy.zoom = [11];

              setActiveStore(closestStore);

              map.fitBounds(
                getBbox([closestStore.lng, closestStore.lat], coordinates),
                {
                  padding: 200,
                }
              );

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
    <StyledStoreLocations className="container">
      <div>
        <LocationsSearchForm />
        <Sidebar {...{ ...state, setActiveStore }} />
        <div className="geocoder" id="geocoder" />
        <MapBox {...mapConfig(state)}>
          {state.stores.map(store => {
            return (
              <StoreMarker
                key={store.id}
                isActive={store.id === state.activeStoreId}
                onClick={() => setActiveStore(store)}
                {...store}
              />
            );
          })}
        </MapBox>
        <Clearfix />
      </div>
    </StyledStoreLocations>
  );
};

export default AltMap;
