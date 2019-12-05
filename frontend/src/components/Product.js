import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import { useMutation } from "react-apollo";
import { PageSection } from "./Sections";
import Button from "./Button";
import { formatMoney, isArrayEmpty } from "../utils/helpers";
import BreadCrumbs from "./BreadCrumbs";
import { ADD_TO_CART_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import SingleProductSlider from "./SingleProductSlider";
import ProduceShareSocial from "./ProduceShareSocial";

const PageStyles = styled(PageSection)`
  .product-terms {
    margin: 10px 0;

    svg {
      height: 0.9375rem;
      width: 0.9375rem;
      vertical-align: middle;
      margin-right: 0.5rem;
    }
  }
`;

const Product = ({ description, id, images, price, title, tag }) => {
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id,
    },
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <PageStyles>
      <Flex className="container">
        {!isArrayEmpty(images) && (
          <Box px={2} width={7 / 12}>
            <SingleProductSlider {...{ images, title }} />
          </Box>
        )}

        <Box px={4} width={5 / 12}>
          <BreadCrumbs activePage={id} {...{ tag }} />
          <h2>{title}</h2>
          <h4>{formatMoney(price)}</h4>
          <p>{description}</p>
          <Button
            aria-label="Add to Shopping Cart"
            fullWidth
            onClick={addToCart}
            size="lg"
            type="button"
          >
            Add to Cart
          </Button>

          <ProduceShareSocial
            {...{
              id,
              title,
            }}
          />

          <ul className="product-terms">
            <li>
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.607 28.178c0 2.462.486 4.81 1.458 7.045.971 2.234 2.267 4.162 3.886 5.781a18.345 18.345 0 005.83 3.935c2.203.94 4.567 1.41 7.093 1.41 2.527 0 4.891-.47 7.094-1.41a18.345 18.345 0 005.83-3.935c1.619-1.62 2.915-3.547 3.886-5.781a17.48 17.48 0 001.458-7.045c0-2.526-.486-4.89-1.458-7.093a19.955 19.955 0 00-3.886-5.83 19.955 19.955 0 00-5.83-3.887 17.14 17.14 0 00-6.996-1.457v8.259L7.23 9.036 22.97 0v8.26c2.721 0 5.28.517 7.677 1.554a20.16 20.16 0 0110.59 10.59c1.037 2.398 1.556 4.989 1.556 7.774 0 2.72-.519 5.296-1.555 7.725-1.037 2.429-2.462 4.518-4.275 6.267-1.814 1.814-3.936 3.239-6.365 4.275C28.17 47.482 25.595 48 22.874 48c-2.72 0-5.295-.518-7.724-1.555-2.43-1.036-4.55-2.461-6.365-4.275-1.813-1.749-3.238-3.838-4.275-6.267-1.036-2.43-1.555-5.004-1.555-7.725h1.652zM21.32 2.818L10.534 9.036l10.786 6.316V2.818z"
                  fill="#000"
                  fillRule="evenodd"
                />
              </svg>
              30 day returns.{" "}
              <a href="/pages/returns-warranty-complaints">
                More info about returns
              </a>
            </li>
            <li>
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g fill="#000" fillRule="nonzero">
                  <path d="M37 29.1a5.901 5.901 0 015.832 5H46.1v-8.451l-6-2V13.9h-9v-6H1.9v26.2h2.268a5.901 5.901 0 0111.664 0h15.336c.434-2.831 2.88-5 5.832-5zm4.9-6.749l6 2V35.9h-6.8V35a4.1 4.1 0 10-8.2 0v.9H14.1V35a4.1 4.1 0 10-8.2 0v.9H.1V6.1h32.8v6h9v10.251zM31.1 13h1.8v22h-1.8V13zm1.8 0v22h-1.8V13h1.8z" />
                  <path d="M10 40.9a5.9 5.9 0 110-11.8 5.9 5.9 0 010 11.8zm0-1.8a4.1 4.1 0 100-8.2 4.1 4.1 0 000 8.2zM37 40.9a5.9 5.9 0 110-11.8 5.9 5.9 0 010 11.8zm0-1.8a4.1 4.1 0 100-8.2 4.1 4.1 0 000 8.2zM13.1 18.627l3.9-3.9 3.9 3.9V23.9h-7.8v-5.273zm1.8 3.473h4.2v-2.727l-2.1-2.1-2.1 2.1V22.1z" />
                </g>
              </svg>
              <span className="usp-item">
                <span className="replace-shipping-price">
                  Free shipping above $100{" "}
                  <a href="/pages/shipping-delivery">
                    More info about shipping
                  </a>
                </span>
              </span>
            </li>
          </ul>
        </Box>
      </Flex>
    </PageStyles>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ),
  tag: PropTypes.oneOf(["MLB", "NFL"]).isRequired,
};

Product.defaultProps = {
  images: [],
};

export default Product;
