import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo";
import { DELETE_ITEM_MUTATION } from "../../../reslovers/Mutation";
import { ALL_ITEMS_QUERY } from "../../../reslovers/Query";
import { StatusSnackbarContext } from "../../StatusSnackbar";
import { TrashIcon } from "../../Icons";

const DeleteItem = ({ id }) => {
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION);
  const { openSnackbar } = useContext(StatusSnackbarContext);

  return (
    <button
      aria-label="Edit"
      onClick={() => {
        // eslint-disable-next-line no-alert
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Are you sure you want to delete this?")) {
          deleteItem({
            variables: {
              id,
            },
            update(cache, { data }) {
              const { items } = cache.readQuery({ query: ALL_ITEMS_QUERY });

              // 3. Put the items back!
              cache.writeQuery({
                query: ALL_ITEMS_QUERY,
                data: {
                  items: items.filter(item => item.id !== data.deleteItem.id),
                },
              });
            },
          }).catch(err => {
            openSnackbar({
              message: err.message,
              variant: "error",
            });
          });
        }
      }}
      type="button"
    >
      <TrashIcon />
    </button>
  );
};

DeleteItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteItem;
