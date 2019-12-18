import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { formatMoney } from "../utils/helpers";
import { CartIcon } from "./Icons";
import { StyledSingleItemSlideOutNav } from "../styles/SingleItem";

const SingleItemSlideOutNav = ({
  id,
  title,
  price,
  images: [primaryImage],
}) => {
  return (
    <StyledSingleItemSlideOutNav>
      <Link to={`/item/${id}`}>
        <img alt={title} src={primaryImage.image} />
      </Link>
      <figcaption>
        <dl>
          <dt>{title}</dt>
          <dd>{formatMoney(price)}.00</dd>
        </dl>
        <nav>
          <button aria-label="Open Cart" type="button">
            <CartIcon />
          </button>
          <button aria-label="Open Cart" type="button">
            <CartIcon />
          </button>
          <button aria-label="Open Cart" type="button">
            <CartIcon />
          </button>
        </nav>
      </figcaption>
    </StyledSingleItemSlideOutNav>
  );
};

SingleItemSlideOutNav.propTypes = {
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

export default SingleItemSlideOutNav;
