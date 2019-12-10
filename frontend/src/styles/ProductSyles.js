import styled from "styled-components";
import { cover, size, position, margin } from "polished";

const ProductSyles = styled.div`
  border-radius: 5px;
  box-shadow: 0 25px 70px rgba(#111, 0.07);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-12px);

    .product {
      &__nav {
        left: 0;
      }

      &__image {
        > a {
          &::after {
            background-color: rgba(17, 17, 17, 0.25);
          }
        }
      }
    }
  }
  .product {
    &__image {
      position: relative;

      > a {
        display: block;
        position: relative;

        &::after {
          ${cover()}
          ${size("100%")}
          backface-visibility: hidden;
          background-color: transparent;
          box-shadow: inset 0 0 0 0 #fff;
          content: "";
          display: block;
          transition: box-shadow 0.5s cubic-bezier(0.19, 1, 0.22, 1),
            background-color 1s cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
    }

    &__nav {
      ${position("absolute", null, null, "20px", "-100%")}
      display: flex;
      justify-content: center;
      transition: 0.8s;
      width: 100%;
      z-index: 3;

      button {
        ${margin(null, "2px")}
        padding: 12px;

        svg {
          display: block;
          height: 20px;
        }
      }
    }

    &__desc {
      padding: 12px 24px;
    }

    &__title {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: #111;
      margin-bottom: 12px;
      overflow: hidden;
      text-decoration: none;

      h2 {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;
      }
    }

    &__price {
      color: #747474;
      font-family: "Maisonneue Bold";
      font-size: 14px;
    }
  }
`;

export default ProductSyles;
