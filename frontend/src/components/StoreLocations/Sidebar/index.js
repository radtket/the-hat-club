import React from "react";
import PropTypes from "prop-types";
import LocationCard from "./LocationCard";
import {
  StyledSidebar,
  StyledSidebarContainer,
} from "../../../styles/StoreLocations";

const Sidebar = ({ stores, activeStoreId, setActiveStore }) => {
  return (
    <StyledSidebar>
      <StyledSidebarContainer>
        {stores.map(location => {
          const { id } = location;
          return (
            <LocationCard
              key={id}
              isActive={activeStoreId === id}
              onClick={() => setActiveStore(location)}
              {...location}
            />
          );
        })}
      </StyledSidebarContainer>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  activeStoreId: PropTypes.number,
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
      lat: PropTypes.number,
      lng: PropTypes.number,
    })
  ).isRequired,
};

Sidebar.defaultProps = {
  activeStoreId: null,
};

export default Sidebar;
