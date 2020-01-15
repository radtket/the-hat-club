import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

// Pages
import About from "./pages/About";
import Account from "./pages/Account";
import Careers from "./pages/Careers";
import CartDetails from "./pages/CartDetails";
import Contact from "./pages/Contact";
import CreateItems from "./pages/CreateItems";
import EditItem from "./pages/EditItem";
import FAQ from "./pages/FAQ";
import Item from "./pages/Item";
import LostPassword from "./pages/LostPassword";
import Order from "./pages/Order";
import Permissions from "./pages/Permissions";
import Reset from "./pages/Reset";
import Sell from "./pages/Sell";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import StoreLocations from "./pages/StoreLocations";

const Routes = () => {
  return (
    <>
      <Navbar />
      <Cart />
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
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/cart">
            <CartDetails />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/create-items">
            <CreateItems />
          </Route>
          <Route exact path="/store-locator">
            <StoreLocations />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/job-oppurtunities">
            <Careers />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default Routes;
