import React from "react";
import Tabs from "../components/Tabs";
import TabList from "../components/Tabs/TabList";
import Tab from "../components/Tabs/Tab";
import TabPanel from "../components/Tabs/TabPanel";
import PageTitle from "../components/PageTitle";
import OrdersTable from "../components/OrdersTable";
// Dashboard
// Orders
// Downloads
// Addresses
// Account Details
// Logout

const Account = () => {
  return (
    <>
      <PageTitle title="My Account" />
      <div className="container">
        <Tabs
          initialValue="tab-dashboard"
          style={{
            display: "flex",
          }}
        >
          <TabList
            style={{
              width: "30%",
            }}
          >
            <Tab name="tab-dashboard">Dashboard</Tab>
            <Tab name="tab-orders">Orders</Tab>
            <Tab name="tab-addresses">Addresses</Tab>
          </TabList>
          <TabPanel name="tab-dashboard">
            <p>Dashboard</p>
          </TabPanel>
          <TabPanel name="tab-orders">
            <OrdersTable />
          </TabPanel>
          <TabPanel name="tab-addresses">
            <p>Addresses</p>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Account;
