import React from "react";
import { padding, size } from "polished";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex, Box } from "@rebass/grid";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  AmexIcon,
  MasterCardIcon,
  PayPalIcon,
  AmazonPayIcon,
  KlarnaIcon,
  ApplePayIcon,
  VisaIcon,
  DiscoverIcon,
} from "./Icons";
import { socialMediaUrls } from "../utils/constants";
import { white, red } from "../utils/colors";

const FooterSyles = styled.footer`
  ${padding("120px", null, "40px")}
  background: ${red[400]};

  .privacy-policy {
    color: ${white};
    font-size: 14px;
  }

  a {
    color: ${white};

    &:hover {
      color: ${red[100]};
    }
  }

  svg.logo {
    fill: ${red[100]};
    display: block;
    max-width: 240px;
    width: 100%;
  }

  .list--social {
    margin: 0;
    padding: 0;
  }

  .list--social__item {
    display: inline-block;
    vertical-align: middle;
  }

  .list--social__link,
  .list--social__icon {
    display: block;
  }

  .list--social__icon {
    ${size("36px")}
  }

  .list--social {
    svg {
      display: block;
      fill: ${white};
      height: 24px;
    }
  }

  .list--social__link {
    padding: 0.4rem;
    transition-property: fill, transform;
    transform-origin: center;

    &:hover {
      svg {
        fill: ${red[100]};
      }
    }

    &:active {
      transform: scale(0.85);
    }
  }

  h4 {
    margin-top: 0;
    color: ${red[100]};
    letter-spacing: 0.015em;
    text-transform: uppercase;
    font-family: "Maisonneue Bold";
  }

  nav {
    display: flex;
  }

  .menu {
    li {
      margin-bottom: 6px;
    }

    a {
      font-size: 18px;
      font-weight: bold;
      color: ${white};

      &:hover {
        color: ${red[100]};
      }
    }
  }

  .payment-options {
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 100%;

    svg {
      fill: ${red[100]};
      display: block;
      width: 42px;
      max-height: 42px;
    }
  }
`;

const Footer = () => {
  const { facebook, twitter, instagram } = socialMediaUrls;
  return (
    <FooterSyles>
      <Flex
        className="container"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box mb={6} px={3}>
          <svg
            className="logo"
            viewBox="0 0 592.18 75.97"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 75.07V.89h19.88v27.75h25.9V.89h19.88v74.18H45.78v-29h-25.9v29zM85.37 75.07L106.69.89h30.59l20.81 74.18h-21.31l-3.34-12.95h-23.35l-3.39 12.95zm28.35-28h16.24l-7.38-30.73h-1.29zM181.09 75.07V17.48h-19.11V.89h58.18v16.59h-19v57.64zM346.87 46.48v2.15q0 14.49-6.37 20.89t-20.88 6.4h-6.72q-15.75 0-22.07-6.7t-6.33-23.58V30.28q0-16.87 6.33-23.58T312.9 0h5.48q15.63 0 21.82 5.87t6.17 20.73v1.44h-19.82V26.7q0-5.09-2.35-7.18t-8.11-2.04c-4.29 0-7.14.83-8.57 2.49s-2.14 5.66-2.14 12v12.2q0 9.47 2.14 11.93c1.43 1.65 4.28 2.47 8.57 2.47 4 0 6.79-.76 8.32-2.27s2.29-4.19 2.29-8v-1.82zM369.33 75.07V.89h20.07v56.94h33.18v17.24zM440.6.89h19.78v43.24q0 9 2.27 11.71c1.51 1.79 4.6 2.69 9.29 2.69h3.63q7 0 9.22-2.64t2.24-11.76V.89h19.78v44.79q0 10-1.22 14.64a20.17 20.17 0 01-4.16 8.12 19.44 19.44 0 01-8.7 5.78q-5.2 1.74-14.07 1.74h-9.81q-8.86 0-14.07-1.74a19 19 0 01-8.69-5.74 20.7 20.7 0 01-4.26-8.24q-1.26-4.75-1.27-14.52zM531.01.89h34.87q13.74 0 19.33 3.91t5.58 13.33v4.78q0 6.29-3.07 9.67t-9.39 4.13a18.24 18.24 0 0110.21 5.21 13.78 13.78 0 013.64 9.78v4.39q0 10.56-5.75 14.77t-21.05 4.21h-34.37zm19.77 16.44v13.15h14c2.13 0 3.65-.4 4.56-1.19a4.93 4.93 0 001.37-3.89v-3a4.9 4.9 0 00-1.37-3.88q-1.37-1.2-4.56-1.2zm0 27.35v13.85h14.8q3.33 0 4.83-1.27a5.11 5.11 0 001.5-4.11v-3.09a5.11 5.11 0 00-1.5-4.11q-1.5-1.28-4.83-1.27z" />
          </svg>
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
                <Link to="pages/contact-us-2">Contact</Link>
              </li>
              <li>
                <Link to="tools/store-locator">Store Locations</Link>
              </li>
              <li>
                <Link to="/pages/affiliate-signup">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="pages/job-oppurtunities">Job Opportunities</Link>
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
                <Link to="/pages/shipping-info">Shipping Info</Link>
              </li>
              <li>
                <Link to="/pages/returns-exchanges">
                  Returns &amp; Exchanges
                </Link>
              </li>
              <li>
                <Link to="/account/login">Login</Link>
              </li>
              <li>
                <Link to="/pages/accessibility-statement">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link to="/pages/klarna-faqs">Klarna FAQ's</Link>
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
    </FooterSyles>
  );
};

export default Footer;
