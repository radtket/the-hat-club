import { LngLatBounds } from "mapbox-gl";

export const getBbox = ([sortedLat, sortedLon], [searchLat, searchLon]) => {
  const lats = [sortedLon, searchLon];
  const lons = [sortedLat, searchLat];

  const handleSort = cords =>
    cords.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
      return 0;
    });

  const [firstLon, secondLon] = handleSort(lons);
  const [firstLat, secondLat] = handleSort(lats);

  return [
    [firstLon, firstLat],
    [secondLon, secondLat],
  ];
};

export const getBounds = stores => {
  const bounds = new LngLatBounds();

  stores.forEach(({ lat, lng }) => {
    bounds.extend([lng, lat]);
  });

  return {
    center: bounds.getCenter().toArray(),
    fitBounds: bounds.toArray(),
  };
};
