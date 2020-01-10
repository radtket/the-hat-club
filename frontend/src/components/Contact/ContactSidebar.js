import React from "react";
import { Link } from "react-router-dom";
import { PaperPlaneIcon, MapWithMarkerIcon } from "../Icons";
import Address from "../Address";
import { StyledIconList } from "../../styles/ContactForm";
import PhoneNumber from "../PhoneNumber";
import EmailAddress from "../EmailAddress";

const ContactSidebar = () => {
  return (
    <aside>
      <StyledIconList className="nm-feature layout-icon_left icon-style-simple bottom-spacing-medium">
        <figure className="nm-feature-icon">
          <PaperPlaneIcon style={{ fill: "#282828" }} />
        </figure>
        <div className="nm-feature-content">
          <h2>Get in Touch</h2>
          <div className="wpb_text_column">
            <dl>
              <dt>Phone:</dt>
              <dd>
                <PhoneNumber phone="888.428.6322" />
              </dd>
            </dl>
            <dl>
              <dt>Email:</dt>
              <dd>
                <EmailAddress email="customerservice@hatclub.com" />
              </dd>
            </dl>
          </div>
        </div>
      </StyledIconList>
      <StyledIconList className="nm-feature layout-icon_left icon-style-simple bottom-spacing-none">
        <figure className="nm-feature-icon">
          <MapWithMarkerIcon style={{ color: "#282828" }} />
        </figure>
        <div className="nm-feature-content">
          <h2>Visit Us</h2>
          <div className="wpb_text_column">
            <Address
              {...{
                street: "2120 E 6th St",
                city: "Tempe",
                state: "AZ",
                zip: "85281",
              }}
            />
            <Link to="/store-locator">View All Locations</Link>
          </div>
        </div>
      </StyledIconList>
    </aside>
  );
};

export default ContactSidebar;
