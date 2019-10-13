import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

// Components
import Navbar from "./components/Navbar";

// Pages
import Sell from "./pages/Sell";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Account from "./pages/Account";

const Routes = () => {
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xl">
        <Switch>
          <Route exact path={["/", "/shop"]}>
            <Shop />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default Routes;
