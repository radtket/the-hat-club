import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatMoney, isArrayEmpty } from "../utils/helpers";
import DeleteItem from "./ProductCard/actions/DeleteItem";
import EditItem from "./ProductCard/actions/EditItem";
import { StyledTable } from "../styles/Tables";

const UserSellingTable = ({ items }) => {
  if (isArrayEmpty(items)) {
    return (
      <dl
        style={{
          textAlign: "center",
        }}
      >
        <dt>No Items Listed:</dt>
        <dd
          style={{
            marginLeft: 0,
          }}
        >
          <Link to="/sell">List your item now!</Link>
        </dd>
      </dl>
    );
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Product</th>
          <th
            style={{
              textAlign: "center",
            }}
          >
            Price
          </th>
          <th
            style={{
              textAlign: "center",
            }}
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, images: [primaryImage], price, title }) => {
          return (
            <tr key={id}>
              <td>
                <img alt={title} src={primaryImage.image} />
              </td>
              <td>{title}</td>
              <td>{formatMoney(price)}</td>
              <td
                style={{
                  minWidth: "124px",
                }}
              >
                <DeleteItem {...{ id }} />
                <EditItem {...{ id }} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

UserSellingTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string,
          largeImage: PropTypes.string,
        })
      ),
      price: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

UserSellingTable.defaultProps = {
  items: [],
};

export default UserSellingTable;
