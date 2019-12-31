import React from "react";
import styled from "styled-components";

const StyledStoreListItem = styled.li`
  border-bottom: 1px solid darkgray;
  color: darkgray;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
  padding: 1rem;
  text-align: left;
  transform: scale(1);
  transition: all 0.5s ease;
  width: 500px;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    font-size: 16px;
    color: black;
    margin-top: 0;
  }

  ul {
    font-size: 12px;

    span {
      color: black;
    }
  }
`;

const StoreListItem = ({
  isActive,
  name,
  send,
  phone,
  email,
  address,
  zip,
  city,
  distance,
  onClick,
}) => {
  return (
    <StyledStoreListItem
      {...{ onClick }}
      style={{
        background: isActive ? "red" : "initial",
      }}
    >
      <div>
        <h3>{name}</h3>
        <ul>
          <li>
            Phone: <span>{phone}</span>
          </li>
          <li>
            Email: <span>{email}</span>
          </li>
          <li>
            Address: <span>{address}</span>
          </li>
          <li>
            <span>{zip}</span> <span>{city}</span>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          From you:{" "}
          <span className="store-meters">{(distance / 1000).toFixed(2)}</span>{" "}
          km
        </li>
        <li>
          Able to send in:{" "}
          <b>
            <span className="store-send">{send ? "Yes" : "No"}</span>
          </b>
        </li>
      </ul>
    </StyledStoreListItem>
  );
};

export default StoreListItem;
