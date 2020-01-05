import React from "react";
import styled from "styled-components";

const StyledAlt1 = styled.div`
  line-height: 1.6;
  color: #2a2a2a;
  font-size: 16px;
  a {
    color: #4076dd;
    cursor: pointer;
  }
  .name {
    letter-spacing: -0.25px;
    line-height: 1.29;
    margin: 0;
    font-size: 20px;
  }
  .links {
    list-style-type: none;
    margin: 2em 0 0;
    padding: 0;
    li {
      border-top: 1px solid #eaeaea;
      padding: 1em 0;
    }
    .icon {
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      width: 50px;
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
`;

const Alt1 = ({
  onClick,
  isActive,
  id,
  name,
  address,
  city,
  state,
  zip,
  phone,
  distance,
}) => {
  return (
    <StyledAlt1>
      <h4 className="name">{name}</h4>
      <div className="address">
        <div className="street">{address}</div>
        <div className="city">{`${city}, ${state} ${zip}`}</div>
      </div>
      <ul className="links">
        <li className="directions">
          <span className="icon">
            <img
              alt=""
              aria-hidden="true"
              src="https://widgets.resy.com/images/location-marker-icon-bd884dc628.svg"
            />
          </span>
          <a
            href="https://www.google.com/maps/dir//124 N Washington St, Falls Church, VA 22046"
            target="_blank"
          >
            Directions
          </a>
        </li>

        <li className="phone" ng-if="PageCtrl.bookingInfo.venue.contact.phone">
          <span className="icon">
            <img
              alt=""
              aria-hidden="true"
              src="https://widgets.resy.com/images/phone-icon-668760baaa.svg"
            />
          </span>
          <a href="tel:(703) 269-0893">{phone}</a>
        </li>

        <li className="site">
          <span className="icon">
            <img
              alt=""
              aria-hidden="true"
              src="https://widgets.resy.com/images/info-icon-d42bcdb1a1.svg"
            />
          </span>
          <a
            href="http://hatclub.com/"
            ng-href="http://hatclub.com/"
            target="_blank"
          >
            http://hatclub.com/
          </a>
        </li>
      </ul>
    </StyledAlt1>
  );
};

export default Alt1;
