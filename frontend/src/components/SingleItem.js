import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { formatMoney } from "../utils/helpers";

const Styles = styled.figure`
  margin-top: 48px;
  margin-bottom: 48px;

  &:hover {
    img {
      transform: translate3d(0, -6px, 0);
    }

    figcaption {
      dt {
        transform: translateY(-100%);
      }

      dd {
        top: 0;
        > a {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  > a {
    display: block;
  }

  img {
    display: block;
    backface-visibility: hidden;
    transition: 0.3s ease;
  }

  figcaption {
    max-width: 315px;
    text-align: center;
    margin: auto;
    color: #272727;

    h3,
    dl {
      font-size: 18px;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 6px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    dl {
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    dt {
      font-family: "Maisonneue Bold";
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    dd {
      margin-left: 0;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      font-size: 16px;
      line-height: 27px;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

      > a {
        position: relative;
        color: #707070;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 1px;
          width: 0;
          transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.33s;
          background: #707070;
        }
      }
    }
  }
`;

const SingleItem = ({ id, title, price, image }) => {
  return (
    <Styles>
      <Link to={`/item/${id}`}>
        <img alt={title} src={image} />
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
  image: PropTypes.string.isRequired,
};

export default SingleItem;
