import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const usePosition = (watch, settings) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({
    coords: { latitude, longitude, accuracy },
    timestamp,
  }) => {
    setPosition({
      latitude,
      longitude,
      accuracy,
      timestamp,
    });
  };

  const onError = err => {
    setError(err.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [settings, watch]);

  return { ...position, error };
};

usePosition.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.shape({
    enableHighAccuracy: PropTypes.bool,
    timeout: PropTypes.number,
    maximumAge: PropTypes.number,
  }),
};

usePosition.defaultProps = {
  watch: false,
  settings: {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0,
  },
};

export default usePosition;
