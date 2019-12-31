import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import Address from "../../../components/Address";

const MapMarker = ({ onCloseClick, onClick, isOpen, address, position }) => {
  return (
    <Marker {...{ onClick, position }}>
      {isOpen && (
        <InfoWindow {...{ onCloseClick }}>
          <Address {...address} />
        </InfoWindow>
      )}
    </Marker>
  );
};

export default MapMarker;
