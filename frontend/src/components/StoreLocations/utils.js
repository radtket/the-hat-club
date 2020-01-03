import { LngLatBounds } from "mapbox-gl";

const { distance } = require("@turf/turf");

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

export const getStoresDetails = (coordinates, stores) => {
  const sortedStores = stores
    .map(item => ({
      ...item,
      distance: distance(coordinates, [item.lng, item.lat], {
        units: "miles",
      }),
    }))
    .sort(({ distance: a }, { distance: b }) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0; // a must be equal to b
    });

  const { id: activeStoreId, lng, lat } = sortedStores[0];

  return {
    stores: sortedStores,
    activeStoreId,
    fitBounds: getBbox([lng, lat], coordinates),
  };
};

// returns the southwest and northeast boundaries of n marker
// coordinates in [lng, lat] form. mapbox bounds the map with these
const getMapBounds = markers => {
  const [{ geo = [] } = {}] = Array.isArray(markers) ? markers : [];

  return markers.reduce(
    ({ sw: { swLng, swLat }, ne: { neLng, neLat } }, { geo: [lng, lat] }) => ({
      sw: {
        swLng: Math.min(swLng, lng),
        swLat: Math.min(swLat, lat),
      },
      ne: {
        neLng: Math.max(neLng, lng),
        neLat: Math.max(neLat, lat),
      },
    }),
    {
      sw: { swLng: geo[0], swLat: geo[1] },
      ne: { neLng: geo[0], neLat: geo[1] },
    }
  );
};

// adds padding around markers so they aren't touching the map edges
// paddingPercent is expressed in decimal form and should be > 0.
const getPaddedMapBounds = ({
  bounds: {
    sw: { swLng, swLat },
    ne: { neLng, neLat },
  },
  paddingPercent,
}) => {
  const deltaX = (neLng - swLng) * paddingPercent;
  const deltaY = (neLat - swLat) * paddingPercent;

  // `react-mapbox-gl` like to have coordinates given as `[lng, lat]`.
  return [
    [swLng - deltaX, swLat - deltaY],
    [neLng + deltaX, neLat + deltaY],
  ];
};

export default ({ markers, paddingPercent }) => {
  const bounds = getMapBounds(markers);
  return getPaddedMapBounds({ bounds, paddingPercent });
};
