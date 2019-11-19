import React from "react";
import { Box } from "@rebass/grid";
import styled from "styled-components";
import {
  Logout,
  PageTitleStacked,
  SmallSection,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "../../components";

// Subpages
import AccountDetails from "./sub-pages/AccountDetails";
import Addresses from "./sub-pages/Addresses";
import Orders from "./sub-pages/Orders";
import WishList from "./sub-pages/WishList";

export const TabContent = styled(TabPanel)`
  h2 {
    margin-top: 0;
    font-weight: normal;
  }
`;

const Account = () => {
  return (
    <>
      <PageTitleStacked title="My Account" />
      <SmallSection className="container">
        <Tabs
          initialValue="tab-account-details"
          style={{
            display: "flex",
          }}
        >
          <Box
            alignItems="flex-start"
            component={TabList}
            display="flex"
            flexDirection="column"
            width={1 / 3}
          >
            <Tab name="tab-orders">Orders</Tab>
            <Tab name="tab-wishlist">Wish List</Tab>
            <Tab name="tab-addresses">Addresses</Tab>
            <Tab name="tab-account-details">Account Details</Tab>
            <Logout
              style={{
                margin: 0,
                padding: 0,
                fontSize: "18px",
              }}
            />
          </Box>
          <TabContent name="tab-orders">
            <Orders />
          </TabContent>
          <TabContent name="tab-wishlist">
            <WishList />
          </TabContent>
          <TabContent name="tab-addresses">
            <Addresses />
          </TabContent>
          <TabContent name="tab-account-details">
            <AccountDetails />
          </TabContent>
        </Tabs>
      </SmallSection>
    </>
  );
};

export default Account;
