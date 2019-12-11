import React from "react";
import { Flex, Box } from "@rebass/grid";
import PropTypes from "prop-types";
import styled from "styled-components";
import { margin } from "polished";
import { gray } from "../utils/colors";

const FaqItemStyles = styled(Flex)`
  font-size: 18px;
  line-height: 1.6;
  margin-top: 16px;

  dt {
    ${margin("16px", null)}
  }

  dd {
    color: ${gray[500]};
  }
`;

const FaqItem = ({ title, children }) => {
  return (
    <FaqItemStyles as="dl" mb={5}>
      <Box as="dt" mx={4} width={1 / 3}>
        {title}
      </Box>
      <Box as="dd" ml={0} mx={4} width={2 / 3}>
        {children}
      </Box>
    </FaqItemStyles>
  );
};

FaqItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FaqItem;
