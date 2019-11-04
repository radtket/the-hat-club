import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

// Components
import Navbar from "./components/Navbar";

// Pages
import Account from "./pages/Account";
import Item from "./pages/Item";
import Orders from "./pages/Orders";
import Sell from "./pages/Sell";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import Permissions from "./pages/Permissions";
import Order from "./pages/Order";

const Routes = () => {
  return (
    <>
      <Navbar />
      <main
        style={{
          marginTop: 80,
        }}
      >
        <Switch>
          <Route exact path={["/", "/shop"]}>
            <Shop />
          </Route>
          <Route exact path="/sell">
            <Sell />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/item/:id">
            <Item />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <Route exact path="/permissions">
            <Permissions />
          </Route>
          <Route exact path="/order/:id">
            <Order />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Routes;
