import React, { useState, useEffect } from "react";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import stores from "../../utils/data/store-locations";
import Sidebar from "../../pages/StoreLocations/Sidebar";
import { StyledStoreLocations, Clearfix } from "../../styles/StoreLocations";
import LocationsSearchForm from "../../pages/StoreLocations/LocationsSearchForm";
import { getBounds } from "./utils";
import Map from "./Map";

const AltMap = () => {
  const [state, setState] = useState({
    ...getBounds(stores),
    zoom: [14],
    stores,
    activeStoreId: null,
    userLocation: null,
  });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setState(prev => ({
          ...prev,
          userLocation: [longitude, latitude],
        }));
      },
      err => {
        console.error("Cannot retrieve your current position", err);
      }
    );
  }, []);

  const setActiveStore = ({ id, lat, lng }) => {
    setState(prev => ({
      ...prev,
      activeStoreId: id,
      center: [lng, lat],
      zoom: [11],
    }));
  };

  return (
    <StyledStoreLocations className="container">
      <div>
        <LocationsSearchForm />
        <Sidebar {...{ ...state, setActiveStore }} />
        <Map {...{ ...state, setState, setActiveStore }} />
        <Clearfix />
      </div>
    </StyledStoreLocations>
  );
};

export default AltMap;
