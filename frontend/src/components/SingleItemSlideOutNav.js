import React from "react";
import { Link } from "react-router-dom";
import { margin } from "polished";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formatMoney } from "../utils/helpers";
import { CartIcon } from "./Icons";

const Styles = styled.div`
  ${margin("48px", null)}
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
      box-shadow: 0px 15px 10px -15px rgba(158, 158, 158, 0.45);
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
    backface-visibility: hidden;
    display: block;
    transition: 0.3s ease;
  }

  > a {
    background: #fff;
    display: block;
    overflow: hidden;
    position: relative;
    transition: border-radius 0.3s;
    z-index: 2;
  }

  figcaption {
    display: block;
    position: relative;
    transform: translateY(0);
    transition: transform 0.3s;
  }

  dl {
    color: #242424;
    font-size: 18px;
    margin: auto;
    max-width: 315px;
    text-align: center;

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
    background: #242424;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    bottom: 100%;
    display: flex;
    justify-content: space-around;
    padding: 36px 12px 12px;
    position: absolute;
    transition: bottom 0.3s;
    width: 100%;

    button {
      &:hover {
        svg {
          fill: #ee5050;
        }
      }
    }

    svg {
      display: block;
      fill: #fff;
      height: 18px;
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
