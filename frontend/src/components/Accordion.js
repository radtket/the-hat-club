import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { position, size, margin } from "polished";
import { MinusIcon, PlusIcon } from "./Icons";
import { rgba } from "../utils/helpers";
import { black } from "../utils/colors";

export const AccordionItemStyles = styled.dl`
  border-bottom: 1px solid ${rgba(black, 0.12)};
  margin-top: 20px;
  padding-bottom: 20px;

  .toggle-title {
    cursor: pointer;
    padding-left: 27px;
    position: relative;

    &::before {
      ${position("absolute", "-2px", null, null, "-8px")};
      ${size("26px")}
      background: ${rgba(black, 0.04)};
      border-radius: 50%;
      content: "";
      opacity: 0;
      transform: scale(0.7);
      transition: all 0.3s ease;
      ${({ isActive }) =>
        isActive &&
        `
          transform: scale(1);
          opacity: 1;

      `}
    }
  }

  .toggle-name {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
    text-transform: none;
  }

  .plus,
  .minus {
    ${position("absolute", "-2px", null, null, "-8px")};
    ${size("26px")}
    border-radius: 50%;
    transition: all 0.3s ease;

    svg {
      ${size("10px")}
      ${position("absolute", "calc(50% - 5px)", null, null, "calc(50% - 5px)")};
      display: block;
      max-width: 100%;
    }
  }

  .plus {
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  }

  .minus {
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }

  .toggle-inner {
    padding-top: 20px;
    margin-left: 27px;
  }
`;

export const Accordion = styled.div`
  ${margin("30px", null)}

  ${AccordionItemStyles} {
    &:first-child {
      margin: 0;
    }
  }
`;

export const AccordionItem = ({ children, title }) => {
  const [isActive, setActive] = useState(false);
  return (
    <AccordionItemStyles {...{ isActive }}>
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
    </AccordionItemStyles>
  );
};

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
