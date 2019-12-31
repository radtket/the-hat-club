import React from "react";
import styled from "styled-components";
import StoreListItem from "./StoreListItem";
import { isArrayEmpty } from "../../../utils/helpers";

const StyledStoreList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 240px;
  list-style: none;
  align-items: center;
  padding: 0;
`;

const StoreList = ({ storeList, activeStoreId, setActiveStore }) => {
  if (isArrayEmpty(storeList)) {
    return null;
  }

  return (
    <StyledStoreList className="store-list">
      {storeList.map(location => {
        const { id } = location;
        return (
          <StoreListItem
            key={id}
            isActive={activeStoreId === id}
            onClick={() => setActiveStore(location)}
            {...location}
          />
        );
      })}
    </StyledStoreList>
  );
};

export default StoreList;
