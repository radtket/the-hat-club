import React from "react";
import { Link } from "react-router-dom";
import { margin, cover, size, position } from "polished";
import styled from "styled-components";
import PropTypes from "prop-types";
import { formatMoney } from "../utils/helpers";

const Styles = styled.figure`
  ${margin("48px", null)}

  &:hover {
    /* img {
      transform: translate3d(0, -6px, 0);
    } */

    figcaption {
      dt {
        transform: translateY(-100%);
      }

      dd {
        top: 0;

        > a {
          &::after {
            /* width: 100%; */
            opacity: 1;
            transform: scaleX(1);
          }
        }
      }
    }
  }

  > a {
    display: block;
    position: relative;

    &:hover {
      img {
        &:last-of-type {
          opacity: 1 !important;
        }
      }
    }

    img {
      backface-visibility: hidden;
      display: block;
      margin: 0;
      transition: 0.3s ease;

      &:last-of-type {
        ${cover()}
        opacity: 0;
        transition: 0.5s;
      }
    }
  }

  figcaption {
    color: #242424;
    margin: auto;
    max-width: 315px;
    text-align: center;

    h3,
    dl {
      font-size: 18px;
    }

    h3 {
      ${margin(0, null, "6px")}
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    dl {
      margin: 0 auto;
      overflow: hidden;
      position: relative;
    }

    dt {
      font-family: "Maisonneue Bold";
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    dd {
      ${position("absolute", "100%", null, null, 0)}
      font-size: 16px;
      line-height: 1.7;
      margin-left: 0;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      width: 100%;

      > a {
        position: relative;
        color: #747474;

        &::after {
          ${position("absolute", null, null, "-2px", 0)}
          ${size("1px", "100%")}
          content: "";
          background: #747474;
          opacity: 0;
          transform: scaleX(0);
          /* transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.33s; */
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.33s,
            opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.33s;
        }
      }
    }
  }
`;

const SingleItem = ({ id, title, price, images }) => {
  const [primaryImage, secondaryImage] = images;
  return (
    <Styles>
      <Link to={`/item/${id}`}>
        <img alt={title} src={primaryImage.largeImage} />
        <img alt={title} src={secondaryImage.largeImage} />
      </Link>
      <figcaption>
        <h3>{title}</h3>
        <dl>
          <dt>{formatMoney(price)}</dt>
          <dd>
            <Link to={`/item/${id}`}>View Details</Link>
          </dd>
        </dl>
      </figcaption>
    </Styles>
  );
};

SingleItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SingleItem;
