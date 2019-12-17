import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { margin } from "polished";
import { formatMoney, isArrayEmpty } from "../utils/helpers";
import DeleteItem from "./ProductCard/actions/DeleteItem";
import EditItem from "./ProductCard/actions/EditItem";
import { gray } from "../utils/colors";

export const SellingTableStyles = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  th,
  td {
    font-weight: inherit;
    padding: 12px;
    text-align: left;
    vertical-align: middle;
  }

  tr {
    &:last-child {
      td {
        border-bottom: 1px solid ${gray[200]};
      }
    }

    td {
      border-top: 1px solid ${gray[200]};
    }
  }

  td {
    img {
      display: block;
      height: 64px;
    }

    button {
      ${margin(null, "6px")}

      svg {
        display: block;
        height: 20px;
      }
    }
  }
`;

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
    <SellingTableStyles>
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
    </SellingTableStyles>
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
