import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const EditItem = ({ id }) => {
  return (
    <IconButton aria-label="Edit" component={Link} to={`/item/${id}`}>
      <Edit />
    </IconButton>
  );
};

EditItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditItem;
