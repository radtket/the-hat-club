import React from "react";
import { Box } from "@rebass/grid";
import styled from "styled-components";
import {
  Logout,
  OrdersTable,
  PageTitleStacked,
  SmallSection,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "../components";

const TabContent = styled(TabPanel)`
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
            <h2>Orders</h2>
            <OrdersTable />
          </TabContent>
          <TabContent name="tab-wishlist">
            <h2>Wish List</h2>
          </TabContent>
          <TabContent name="tab-addresses">
            <h2>Addresses</h2>
          </TabContent>
          <TabContent name="tab-account-details">
            <h2>Account Details</h2>
          </TabContent>
        </Tabs>
      </SmallSection>
    </>
  );
};

export default Account;
