import React from "react";
import { Marker, Popup } from "react-mapbox-gl";

const StoreMarker = ({ isActive, onClick, id, lat, lng }) => {
  const coordinates = [lng, lat];
  return (
    <>
      <Marker key={id} anchor="bottom" {...{ coordinates, onClick }}>
        <div
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "#33f",
            borderRadius: "50%",
          }}
        />
      </Marker>
      {isActive && (
        <Popup {...{ coordinates }}>
          <h1>Hi</h1>
        </Popup>
      )}
    </>
  );
};

export default StoreMarker;
