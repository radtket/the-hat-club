import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import PropTypes from "prop-types";
import { FacebookNoBgIcon, TwitterIcon, MailIcon } from "./Icons";
import { IconButton } from "../styles/Buttons";
import WishlistButton from "./WishlistButton";
import { StyledProduceShareSocial } from "../styles/Navs";

const ProduceShareSocial = ({ id, title }) => {
  return (
    <StyledProduceShareSocial>
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
    </StyledProduceShareSocial>
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
