/* eslint-disable no-undef */
import React from "react";
import _ from "lodash";
import { compose, lifecycle, withProps } from "recompose";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
import styled from "styled-components";
import { StyledLocationsMapWrap } from "../../../styles/StoreLocations";
import MapMarker from "./MapMarker";

export const StyledMap = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledInput = styled.input`
  border-radius: 3px;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px;
  box-sizing: border-box;
  font-size: 14px;
  height: 45px;
  left: 189px;
  margin-top: 25px;
  outline: none;
  padding: 0px 12px;
  position: absolute;
  top: 0px;
  width: 260px;
  z-index: 0;
`;

const ServiceMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-ru_uWY37xLv0qJ7ceWstneow70_nqXA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <StyledLocationsMapWrap />,
    mapElement: <StyledMap />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};
      const { props } = this;
      const { findClosest, defaultValues, stores } = props;
      const { center } = defaultValues;

      this.setState({
        bounds: null,
        center,
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;

          const bounds = new google.maps.LatLngBounds();

          stores.forEach(({ lat, lng }) => {
            bounds.extend(new google.maps.LatLng(lat, lng));
          });

          // Fit map to bounds
          refs.map.fitBounds(bounds);
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
          console.log("onPlacesChanged");
          const [firstPlace] = places;
          this.setState(prev => {
            const copy = { ...prev };
            // the place coordinates.
            const lnglat = JSON.stringify(firstPlace.geometry.location);
            const cleaned = JSON.parse(lnglat);

            // Send object with coordinates to parent component.
            findClosest(cleaned);

            places.forEach(({ geometry }) => {
              if (geometry.viewport) {
                bounds.union(geometry.viewport);
              } else {
                bounds.extend(geometry.location);
              }
            });

            copy.markers = places.map(({ geometry }) => ({
              position: geometry.location,
            }));

            copy.center = _.get(copy.markers, "0.position", copy.center);

            return copy;
          });

          refs.map.fitBounds(bounds);
        },
      });
    },
  }),
  withScriptjs,
  withGoogleMap
)(
  ({
    bounds,
    center,
    defaultValues,
    markers,
    onMapMounted,
    onPlacesChanged,
    onSearchBoxMounted,
    stores,
    setState,
    isInfoWindowOpen,
    setActiveStore,
  }) => {
    const { zoom: defaultZoom } = defaultValues;
    return (
      <GoogleMap ref={onMapMounted} {...{ center, defaultZoom }}>
        <SearchBox
          ref={onSearchBoxMounted}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          {...{ onPlacesChanged, bounds }}
        >
          <StyledInput placeholder="Input your address" type="text" />
        </SearchBox>
        {markers.map(({ position }, key) => {
          return <Marker {...{ key, position }} />;
        })}
        {stores.map(location => {
          const {
            id,
            name,
            address,
            city,
            state,
            zip,
            phone,
            lat,
            lng,
          } = location;
          return (
            <MapMarker
              key={id}
              address={{ name, street: address, city, state, zip, phone }}
              isOpen={isInfoWindowOpen === id}
              onClick={() => setActiveStore(location)}
              onCloseClick={() => {
                setState(prev => ({
                  ...prev,
                  isInfoWindowOpen: null,
                }));
              }}
              position={{
                lat,
                lng,
              }}
            />
          );
        })}
      </GoogleMap>
    );
  }
);

export default ServiceMap;
