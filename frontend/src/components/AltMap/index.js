import React, { useState } from "react";
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
  });

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
