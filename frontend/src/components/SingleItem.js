import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatMoney } from "../utils/helpers";

const Styles = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;

  img {
    display: block;
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
`;

const SingleItem = ({ id, title, price, description, image, largeImage }) => {
  return (
    <Styles>
      <Link to={`/item/${id}`}>
        <img alt={title} src={image} />
      </Link>
      <dl>
        <dt>{title}</dt>
        <dd>{formatMoney(price)}.00</dd>
      </dl>
    </Styles>
  );
};

export default SingleItem;
