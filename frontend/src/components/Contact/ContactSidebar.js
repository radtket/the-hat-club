import React from "react";
import { PaperPlaneIcon, MapWithMarkerIcon } from "../Icons";
import Address from "../Address";
import { StyledIconList } from "../../styles/ContactForm";

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
                <a href="#">888.428.6322</a>
              </dd>
            </dl>
            <dl>
              <dt>Email:</dt>
              <dd>
                <a href="#">customerservice@hatclub.com</a>
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
            <p>
              <a href="#">Get Directions</a>
            </p>
          </div>
        </div>
      </StyledIconList>
    </aside>
  );
};

export default ContactSidebar;
