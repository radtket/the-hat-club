import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MinusIcon, PlusIcon } from "./Icons";

export const AccordionItemStyles = styled.dl`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 20px;
  margin-top: 20px;

  .toggle-title {
    position: relative;
    padding-left: 27px;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: -8px;
      background: rgba(0, 0, 0, 0.04);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      transform: scale(0.7);
      opacity: 0;
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
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: none;
    margin: 0;
  }

  .plus,
  .minus {
    position: absolute;
    top: -2px;
    left: -8px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 0.3s ease;

    svg {
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: calc(50% - 5px);
      left: calc(50% - 5px);
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
  margin-top: 30px;
  margin-bottom: 30px;

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
