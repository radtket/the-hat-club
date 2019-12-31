import React from "react";
import styled from "styled-components";

const StyledIconListItem = styled.a`
  padding-bottom: 0.8rem;
  display: block;
  white-space: nowrap;

  svg {
    width: 24px;
    height: 24px;
    overflow: visible;
    margin-right: 6px;
    position: relative;
    top: -2px;
    vertical-align: middle;
  }
  .hiddenVisually {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
  }
  .whiteSpace-noWrap {
    white-space: nowrap !important;
  }
`;

const IconListItem = ({ icon, text, label }) => {
  return (
    <StyledIconListItem>
      <span className="hiddenVisually">{label}</span>
      <div>
        {icon}
        <span>{text}</span>
      </div>
    </StyledIconListItem>
  );
};

export default IconListItem;
