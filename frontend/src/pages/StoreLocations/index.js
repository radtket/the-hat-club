import React from "react";

// Components
import Sidebar from "./Sidebar";
import LocationsMapWrap from "./LocationsMapWrap";
import LocationsSearchForm from "./LocationsSearchForm";

// data
import stores from "../../utils/data/store-locations";
import { StyledStoreLocations, Clearfix } from "../../styles/StoreLocations";

const StoreLocations = () => {
  return (
    <div className="container">
      <StyledStoreLocations>
        <LocationsSearchForm />
        <Sidebar {...{ stores }} />
        <LocationsMapWrap {...{ stores }} />
        <Clearfix />
      </StyledStoreLocations>
    </div>
  );
};

export default StoreLocations;
