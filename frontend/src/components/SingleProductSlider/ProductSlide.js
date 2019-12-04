import React from "react";
import PropTypes from "prop-types";

const ProductSlide = ({ alt, src }) => {
  return (
    <figure>
      <button
        style={{
          display: "block",
          margin: "auto",
        }}
        type="button"
      >
        <img {...{ alt, src }} />
      </button>
    </figure>
  );
};

ProductSlide.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ProductSlide;
