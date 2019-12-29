import React from "react";
import { StyledLocationsSearchForm } from "../../styles/StoreLocations";
import { CloseIcon } from "../../components/Icons";

const LocationsSearchForm = () => {
  return (
    <StyledLocationsSearchForm
      onSubmit={e => {
        e.preventDefault();
        return false;
      }}
    >
      <div className="searchbar__container">
        <button className="searchbar__clear-search" type="button">
          <CloseIcon alt="clear search" />
        </button>
        <input
          autoComplete="off"
          className="searchbar__input"
          placeholder="Enter a location"
          title="enter your location"
          type="search"
        />
      </div>
      <div
        aria-haspopup="true"
        className="searchbar__dropdown"
        id="storepoint-radius-dropdown"
      >
        100 mi
        <ul>
          <li>
            <label className="storepoint-radius-update" data-radius={5}>
              5
            </label>
          </li>
          <li>
            <label className="storepoint-radius-update" data-radius={10}>
              10
            </label>
          </li>
          <li>
            <label className="storepoint-radius-update" data-radius={25}>
              25
            </label>
          </li>
          <li>
            <label className="storepoint-radius-update" data-radius={50}>
              50
            </label>
          </li>
          <li>
            <label className="storepoint-radius-update" data-radius={100}>
              100
            </label>
          </li>
        </ul>
      </div>
      <div className="searchbar__dropdown" style={{ zIndex: 996 }}>
        Categories
        <ul>
          <li>
            <label>
              <input defaultValue="frost" type="checkbox" />
              frost
            </label>
          </li>
        </ul>
      </div>
    </StyledLocationsSearchForm>
  );
};

export default LocationsSearchForm;
