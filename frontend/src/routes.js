import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarSimple from "./components/NavbarSimple";

// Pages
import Account from "./pages/Account";
import Item from "./pages/Item";
import EditItem from "./pages/EditItem";
import LostPassword from "./pages/LostPassword";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import Permissions from "./pages/Permissions";
import Reset from "./pages/Reset";
import Sell from "./pages/Sell";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";

const Routes = () => {
  return (
    <>
      <NavbarSimple />
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
          <Route exact path="/edit/:id">
            <EditItem />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <Route exact path="/lost-password">
            <LostPassword />
          </Route>
          <Route exact path="/permissions">
            <Permissions />
          </Route>
          <Route exact path="/order/:id">
            <Order />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default Routes;
