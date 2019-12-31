import React from "react";
import PropTypes from "prop-types";
import LocationCard from "./LocationCard";
import {
  StyledSidebar,
  StyledSidebarContainer,
} from "../../styles/StoreLocations";
import StoreList from "../AltMap/components/StoreList";

const Sidebar = ({ storeList, activeStoreId, setActiveStore }) => {
  return (
    <StyledSidebar>
      <StyledSidebarContainer>
        <StoreList {...{ storeList, activeStoreId, setActiveStore }} />
        {storeList.map(store => (
          <LocationCard key={store.id} {...store} />
        ))}
      </StyledSidebarContainer>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  activeStoreId: PropTypes.number,
  setActiveStore: PropTypes.func.isRequired,
  storeList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      phone: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
    })
  ).isRequired,
};

Sidebar.defaultProps = {
  activeStoreId: null,
};

export default Sidebar;
