import React from "react";
import PropTypes from "prop-types";
import LocationCard from "./LocationCard";
import {
  StyledSidebar,
  StyledSidebarContainer,
} from "../../styles/StoreLocations";

const Sidebar = ({ stores }) => {
  return (
    <StyledSidebar>
      <StyledSidebarContainer>
        {stores.map(store => (
          <LocationCard key={store.id} {...store} />
        ))}
      </StyledSidebarContainer>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      phone: PropTypes.string,
      lat: PropTypes.string,
      long: PropTypes.string,
    })
  ).isRequired,
};

export default Sidebar;
