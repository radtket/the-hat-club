import React from "react";
import { Box } from "@rebass/grid";
import PropTypes from "prop-types";
import { StyledFaqItem } from "../styles/Lists";

const FaqItem = ({ title, children }) => {
  return (
    <StyledFaqItem as="dl" mb={5}>
      <Box as="dt" mx={4} width={1 / 3}>
        {title}
      </Box>
      <Box as="dd" ml={0} mx={4} width={2 / 3}>
        {children}
      </Box>
    </StyledFaqItem>
  );
};

FaqItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FaqItem;
