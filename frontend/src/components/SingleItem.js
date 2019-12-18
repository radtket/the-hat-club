import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledSingleItem } from "../styles/SingleItem";
import { formatMoney } from "../utils/helpers";

const SingleItem = ({ id, title, price, images }) => {
  const [primaryImage, secondaryImage] = images;
  return (
    <StyledSingleItem>
      <Link to={`/item/${id}`}>
        <img alt={title} src={primaryImage.largeImage} />
        <img
          alt={title}
          src={
            (secondaryImage && secondaryImage.largeImage) ||
            primaryImage.largeImage
          }
        />
      </Link>
      <figcaption>
        <h3>{title}</h3>
        <dl>
          <dt>{formatMoney(price)}</dt>
          <dd>
            <Link to={`/item/${id}`}>View Details</Link>
          </dd>
        </dl>
      </figcaption>
    </StyledSingleItem>
  );
};

SingleItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SingleItem;
