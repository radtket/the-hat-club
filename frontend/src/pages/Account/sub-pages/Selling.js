import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { margin } from "polished";
import { Link } from "react-router-dom";
import { ALL_ITEMS_QUERY } from "../../../reslovers/Query";
import { ErrorMessage } from "../../../components";
import { formatMoney, isArrayEmpty } from "../../../utils/helpers";
import DeleteItem from "../../../components/ProductCard/actions/DeleteItem";
import EditItem from "../../../components/ProductCard/actions/EditItem";

export const SellingTableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    padding: 12px;
    vertical-align: middle;
    font-weight: inherit;
    vertical-align: middle;
    text-align: left;
  }

  tr {
    &:last-child {
      td {
        border-bottom: 1px solid #eee;
      }
    }

    td {
      border-top: 1px solid #eee;
    }
  }

  td {
    img {
      height: 64px;
      display: block;
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

const Selling = () => {
  const { data, loading, error } = useQuery(ALL_ITEMS_QUERY);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  if (!isArrayEmpty(data.items)) {
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
        {data.items.map(({ id, image, price, title }) => {
          return (
            <tr key={id}>
              <td>
                <img alt={title} src={image} />
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

export default Selling;
