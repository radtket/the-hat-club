import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/helpers";

// Actions
import AddToCart from "./actions/AddToCart";
import DeleteItem from "./actions/DeleteItem";
import EditItem from "./actions/EditItem";
import ProductSyles from "../../styles/ProductSyles";

const ProductCard = ({ id, title, price, description, image, largeImage }) => {
  return (
    <ProductSyles>
      <figure className="product__image">
        <Link to={`/item/${id}`}>
          <img alt={title} src={image} />
        </Link>
        <nav className="product__nav">
          <AddToCart {...{ id }} />
          <DeleteItem {...{ id }} />
          <EditItem {...{ id }} />
        </nav>
      </figure>
      <figcaption className="product__desc">
        <Link className="product__title" to={`/item/${id}`}>
          <h2>{title}</h2>
        </Link>
        <h6 className="product__price">{formatMoney(price)}</h6>
      </figcaption>
    </ProductSyles>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ProductCard;
