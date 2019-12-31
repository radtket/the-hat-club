import React from "react";
import ServiceMap from "./components/ServiceMap";

const AltMap = ({
  stores,
  sortedStores,
  isInfoWindowOpen,
  setState,
  activeStoreId,
  isOpen,
  setOpen,
  setActiveStore,
}) => {
  const calculateDistance = (pointA, pointB, place) => {
    const copy = { ...place };
    // http://www.movable-type.co.uk/scripts/latlong.html
    const lat1 = pointA.lat;
    const lng1 = pointA.lng;

    const lat2 = pointB.lat;
    const lng2 = pointB.lng;

    const earthRadius = 6378137; // earth radius in meters
    const φ1 = lat1 * (Math.PI / 180);
    const φ2 = lat2 * (Math.PI / 180);
    const Δφ = (lat2 - lat1) * (Math.PI / 180);
    const Δλ = (lng2 - lng1) * (Math.PI / 180);

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    copy.distance = distance;
    return copy; // in meters
  };

  const findClosest = coordinates => {
    setState(prev => {
      const copy = { ...prev };

      copy.sortedStores = copy.stores
        .map(place => {
          return calculateDistance(
            coordinates,
            { lat: place.lat, lng: place.lng },
            place
          );
        })
        .sort((a, b) => a.distance - b.distance);
      const [activeStore] = copy.sortedStores;
      copy.activeStore = activeStore;

      return copy;
    });
  };

  return (
    <ServiceMap
      defaultValues={{
        center: {
          lat: 62.982,
          lng: 11.416,
        },
        zoom: 5,
      }}
      {...{
        findClosest,
        stores,
        sortedStores,
        isInfoWindowOpen,
        setState,
        activeStoreId,
        isOpen,
        setOpen,
        setActiveStore,
      }}
    />
  );
};

export default AltMap;
