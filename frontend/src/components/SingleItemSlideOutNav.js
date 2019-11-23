import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formatMoney } from "../utils/helpers";
import { CartIcon } from "./Icons";

const Styles = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, -6px, 0);
    }
  }

  &:hover {
    > a {
      border-bottom-right-radius: 24px;
      border-bottom-left-radius: 24px;
      box-shadow: 0px 15px 10px -15px rgba(155, 155, 155, 0.45);
    }

    img {
      /* transform: translate3d(0, -6px, 0); */
      animation: MoveUpDown 1.5s linear infinite;
    }

    figcaption {
      transform: translateY(-100%);
    }

    nav {
      bottom: -45px;
      box-shadow: 0px 15px 10px -15px #111;
    }
  }

  img {
    display: block;
    backface-visibility: hidden;
    transition: 0.3s ease;
  }

  > a {
    display: block;
    position: relative;
    z-index: 2;
    overflow: hidden;
    background: #fff;
    transition: border-radius 0.3s;
  }

  figcaption {
    display: block;
    position: relative;
    transform: translateY(0);
    transition: transform 0.3s;
  }

  dl {
    max-width: 315px;
    text-align: center;
    margin: auto;
    color: #272727;
    font-size: 18px;

    dt {
      margin-bottom: 6px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    dd {
      font-family: "Maisonneue Bold";
      margin: 0;
    }
  }

  nav {
    background: #272727;
    padding: 36px 12px 12px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    bottom: 100%;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
    transition: bottom 0.3s;

    button {
      &:hover {
        svg {
          fill: #ee5050;
        }
      }
    }

    svg {
      height: 18px;
      fill: #fff;
      display: block;
    }
  }
`;

const SingleItemSlideOutNav = ({ id, title, price, image }) => {
  return (
    <Styles>
      <Link to={`/item/${id}`}>
        <img alt={title} src={image} />
      </Link>
      <figcaption>
        <dl>
          <dt>{title}</dt>
          <dd>{formatMoney(price)}.00</dd>
        </dl>
        <nav>
          <button aria-label="Open Cart" type="button">
            <CartIcon />
          </button>
          <button aria-label="Open Cart" type="button">
            <CartIcon />
          </button>
          <button aria-label="Open Cart" type="button">
            <CartIcon />
          </button>
        </nav>
      </figcaption>
    </Styles>
  );
};

SingleItemSlideOutNav.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default SingleItemSlideOutNav;
