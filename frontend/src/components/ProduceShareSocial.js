import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FacebookNoBgIcon, TwitterIcon, MailIcon } from "./Icons";
import { IconButton } from "../styles/Form";
import WishlistButton from "./WishlistButton";

const Styles = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;

  button,
  > .divider {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .divider {
    position: relative;
    margin-right: 12px;
    margin-left: 12px;

    &::after {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 1px;
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
