import React, { useState } from "react";

// Components
import Sidebar from "./Sidebar";
import LocationsMapWrap from "./LocationsMapWrap";
import LocationsSearchForm from "./LocationsSearchForm";

// data
import data from "../../utils/data/store-locations";
import { StyledStoreLocations, Clearfix } from "../../styles/StoreLocations";

const StoreLocations = () => {
  const [stores, setStores] = useState(data);

  return (
    <StyledStoreLocations className="container">
      <div>
        <LocationsSearchForm />
        <Sidebar {...{ stores }} />
        <LocationsMapWrap {...{ stores, setStores }} />
        <Clearfix />
      </div>
    </StyledStoreLocations>
  );
};

export default StoreLocations;
