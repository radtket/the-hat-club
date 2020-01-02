import React, { useState } from "react";

// Components
import Sidebar from "./Sidebar";
import LocationsMapWrap from "./LocationsMapWrap";
import LocationsSearchForm from "./LocationsSearchForm";

// data
import data from "../../utils/data/store-locations";
import { StyledStoreLocations, Clearfix } from "../../styles/StoreLocations";
import { isArrayEmpty } from "../../utils/helpers";

const StoreLocations = () => {
  const [state, setState] = useState({
    stores: data,
    sortedStores: [],
    activeStore: {},
    isInfoWindowOpen: false,
  });
  const { stores, sortedStores, activeStore } = state;
  const activeStoreId = activeStore && activeStore.id;
  const storeList = isArrayEmpty(sortedStores) ? stores : sortedStores;

  const setActiveStore = store => {
    setState(prev => ({
      ...prev,
      activeStore: store,
      isInfoWindowOpen: store.id,
    }));
  };

  return (
    <StyledStoreLocations className="container">
      <div>
        <LocationsSearchForm />
        <Sidebar {...{ setState, activeStoreId, setActiveStore, storeList }} />
        <LocationsMapWrap {...{ stores, setState }} />
        <Clearfix />
      </div>
    </StyledStoreLocations>
  );
};

export default StoreLocations;
