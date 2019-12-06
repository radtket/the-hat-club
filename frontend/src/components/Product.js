import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "@rebass/grid";
import { useMutation } from "react-apollo";
import { PageSection } from "./Sections";
import Button from "./Button";
import { formatMoney, isArrayEmpty } from "../utils/helpers";
import BreadCrumbs from "./BreadCrumbs";
import { ADD_TO_CART_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import SingleProductSlider from "./SingleProductSlider";
import ProduceShareSocial from "./ProduceShareSocial";
import QuanityToggle from "./QuanityToggle";
import ProductTerms from "./ProductTerms";

const Product = ({ description, id, images, price, title, tag }) => {
  const [quantity, setQuantity] = useState(1);
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id,
      quantity,
    },
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <PageSection>
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

          <QuanityToggle
            quantityState={quantity}
            setQuantityState={setQuantity}
          />
          <Button
            aria-label="Add to Shopping Cart"
            fullWidth
            onClick={addToCart}
            size="lg"
            style={{
              marginTop: 12,
            }}
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
          <ProductTerms />
        </Box>
      </Flex>
    </PageSection>
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
