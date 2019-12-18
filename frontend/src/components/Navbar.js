import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { useQuery } from "react-apollo";
import { HatClubLogo } from "./Branding";
import CartToggleButton from "./Cart/CartToggleButton";
import AccountButton from "./AccountButton";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import CartCount from "./Cart/CartCount";
import { CartIcon } from "./Icons";
import { StyledNavbar } from "../styles/Navs";

const Navbar = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const scrollRef = useRef(null);
  const { y } = useWindowScroll();

  return (
    <StyledNavbar isCompact={y <= 100}>
      <div ref={scrollRef} className="container">
        <Link className="logo" to="/">
          <HatClubLogo />
        </Link>
        <nav>
          <div>
            <Link to="/">Shop</Link>
            <Link to="/sell">Sell</Link>
          </div>
          <div>
            <AccountButton {...data} />
            <CartToggleButton
              style={{
                position: "relative",
              }}
            >
              <CartCount {...data} />
              <CartIcon />
            </CartToggleButton>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
