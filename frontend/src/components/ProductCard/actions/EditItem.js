import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { PencilIcon } from "../../Icons";

const EditItem = ({ id }) => {
  const { push } = useHistory();
  return (
    <button
      aria-label="Edit Item"
      onClick={e => {
        e.preventDefault();
        push(`/item/${id}`);
      }}
      type="button"
    >
      <PencilIcon />
    </button>
  );
};

EditItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditItem;
