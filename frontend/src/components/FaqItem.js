import React from "react";
import { Flex, Box } from "@rebass/grid";
import PropTypes from "prop-types";

const FaqItem = ({ title, children }) => {
  return (
    <Flex
      as="dl"
      mb={5}
      style={{
        fontSize: "18px",
        lineHeight: 1.6,
      }}
    >
      <Box
        as="dt"
        mx={4}
        style={{
          marginTop: "1em",
          marginBottom: "1em",
        }}
        width={1 / 3}
      >
        {title}
      </Box>
      <Box
        as="dd"
        ml={0}
        mx={4}
        style={{
          color: "#777",
        }}
        width={2 / 3}
      >
        {children}
      </Box>
    </Flex>
  );
};

FaqItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FaqItem;
