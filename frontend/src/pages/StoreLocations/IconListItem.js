import React from "react";
import PropTypes from "prop-types";
import { StyledIconListItem } from "../../styles/StoreLocations";

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

IconListItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconListItem;
