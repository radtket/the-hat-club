import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { position, size, margin, padding } from "polished";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FacebookNoBgIcon, TwitterIcon, MailIcon } from "./Icons";
import { IconButton } from "../styles/Form";
import WishlistButton from "./WishlistButton";

const Styles = styled.div`
  ${margin("24px", null, "36px")}

  button,
  > .divider {
    ${padding("4px", null)}
  }

  .divider {
    ${margin(null, "12px")}
    position: relative;

    &::after {
      ${position("absolute", 0, null, null, 0)};
      ${size("100%", "1px")}
      background: #dadada;
      content: "";
    }
  }

  > div {
    display: inline-block;
    margin-right: 6px;
  }
`;

const ProduceShareSocial = ({ id, title }) => {
  return (
    <Styles>
      <WishlistButton {...{ id }} />
      <span className="divider" />
      <EmailShareButton
        body={`I want to recommend this product at Amazon.com \n \n${title} @HatClub\n \n`}
        openWindow
        separator="Learn More: "
        subject="I want to recommend this product from Hat Club"
        url={window.location.href}
      >
        <IconButton type="button">
          <MailIcon />
        </IconButton>
      </EmailShareButton>
      <FacebookShareButton
        hashtags={["HATCLUB"]}
        quote={`${title} @HatClub`}
        url={window.location.href}
      >
        <IconButton type="button">
          <FacebookNoBgIcon />
        </IconButton>
      </FacebookShareButton>
      <TwitterShareButton
        hashtags={["HATCLUB"]}
        title={`${title} @HatClub`}
        url={window.location.href}
      >
        <IconButton type="button">
          <TwitterIcon />
        </IconButton>
      </TwitterShareButton>
    </Styles>
  );
};

ProduceShareSocial.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wishlistItem: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
};

ProduceShareSocial.defaultProps = {
  wishlistItem: false,
};

export default ProduceShareSocial;
