import React from "react";
import PageTitle from "../components/PageTitle";
import OrdersTable from "../components/OrdersTable";

const Orders = () => {
  return (
    <>
      <PageTitle title="Orders" />
      <div className="container">
        <OrdersTable />
      </div>
    </>
  );
};

export default Orders;
