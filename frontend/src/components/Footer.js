import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from "@rebass/grid";
import { useQuery } from "react-apollo";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import {
  AmazonPayIcon,
  AmexIcon,
  ApplePayIcon,
  DiscoverIcon,
  FacebookIcon,
  InstagramIcon,
  KlarnaIcon,
  MasterCardIcon,
  PayPalIcon,
  TwitterIcon,
  VisaIcon,
} from "./Icons";
import { socialMediaUrls } from "../utils/constants";
import { StyledFooter } from "../styles/General";
import { HatClubLogo } from "./Branding";

const Footer = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const { facebook, twitter, instagram } = socialMediaUrls;
  return (
    <StyledFooter>
      <Flex
        className="container"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box mb={6} px={3}>
          <HatClubLogo className="logo" />
          <p className="privacy-policy">
            © Hat Club. <span data-replace-date="">2019</span> |{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
          <ul className="list--social">
            <li className="list--social__item">
              <a
                className="list--social__link"
                href={facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="list--social__icon">
                  <FacebookIcon />
                </i>
                <span className="visuallyhidden">Follow us on Facebook</span>
              </a>{" "}
            </li>
            <li className="list--social__item">
              <a
                className="list--social__link"
                href={twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="list--social__icon">
                  <TwitterIcon />
                </i>
                <span className="visuallyhidden">Follow us on Twitter</span>
              </a>{" "}
            </li>
            <li className="list--social__item">
              <a
                className="list--social__link"
                href={instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="list--social__icon">
                  <InstagramIcon />
                </i>
                <span className="visuallyhidden">Follow us on Instagram</span>
              </a>{" "}
            </li>{" "}
          </ul>
        </Box>
        <nav>
          <Box mb={6} pr={6}>
            <h4>About Hat Club</h4>
            <ul className="menu">
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
              <li>
                <Link to="/store-locator">Store Locations</Link>
              </li>
              <li>
                <Link to="/affiliate-signup">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="job-oppurtunities">Job Opportunities</Link>
              </li>
            </ul>
          </Box>
          <Box mb={6}>
            <h4>Customer Service</h4>
            <ul className="menu">
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping-info">Shipping Info</Link>
              </li>
              <li>
                <Link to="/returns-exchanges">Returns &amp; Exchanges</Link>
              </li>
              <li>
                {data && data.me ? (
                  <Link to="/account">Account</Link>
                ) : (
                  <Link to="/account/login">Login</Link>
                )}
              </li>
              <li>
                <Link to="/accessibility-statement">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link to="/klarna-faqs">Klarna FAQ's</Link>
              </li>
            </ul>
          </Box>
        </nav>

        <ul className="payment-options">
          <li>
            <AmexIcon />
          </li>
          <li>
            <MasterCardIcon />
          </li>
          <li>
            <PayPalIcon />
          </li>
          <li>
            <AmazonPayIcon />
          </li>
          <li>
            <KlarnaIcon />
          </li>
          <li>
            <ApplePayIcon />
          </li>
          <li>
            <VisaIcon />
          </li>
          <li>
            <DiscoverIcon />
          </li>
        </ul>
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
