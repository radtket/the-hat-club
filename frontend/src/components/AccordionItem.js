import React, { useState } from "react";
import PropTypes from "prop-types";
import { MinusIcon, PlusIcon } from "./Icons";

import { StyledAccordionItem } from "../styles/Accordion";

const AccordionItem = ({ children, title }) => {
  const [isActive, setActive] = useState(false);
  return (
    <StyledAccordionItem {...{ isActive }}>
      <dt>
        <button
          className="toggle-title"
          onClick={e => {
            e.preventDefault();
            setActive(!isActive);
          }}
          type="button"
        >
          <h6 className="toggle-name">{title}</h6>
          <span className="plus">
            <PlusIcon />
          </span>
          <span className="minus">
            <MinusIcon />
          </span>
        </button>
      </dt>
      <dd
        className="toggle-inner"
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        {children}
      </dd>
    </StyledAccordionItem>
  );
};

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AccordionItem;
