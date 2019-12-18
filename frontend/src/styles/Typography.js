import styled, { css } from "styled-components";
import { position } from "polished";
import { rgba } from "../utils/helpers";
import { black, white, gray, red } from "../utils/colors";
import { SmallSection } from "./General";

export const StyledBigCallout = styled.div`
  margin: auto;
  max-width: 61.5rem;
  position: relative;
  width: calc(100% - 3rem);

  h1 {
    display: block;
    font-family: "Maisonneue Bold";
    font-size: 2.8rem;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin: 3.5rem auto;
    max-width: 61.5rem;
    text-align: center;

    @media only screen and (min-width: 32rem) {
      font-size: 3.25rem;
      margin: 5rem auto;
    }

    @media only screen and (min-width: 48rem) {
      font-size: 3.7rem;
      margin: 10rem auto 7.5rem;
    }

    @media only screen and (min-width: 64rem) {
      font-size: 4.15rem;
    }

    @media only screen and (min-width: 72rem) {
      font-size: 5.6rem;
    }

    @media only screen and (min-width: 96rem) {
      font-size: 5.05rem;
    }
  }
`;

export const StyledBigTitle = styled.div`
  font-weight: 400;
  line-height: 1.7em;
  overflow: hidden;
  padding: 180px 0px 100px;
  position: relative;

  .sec-title {
    margin-bottom: 85px;
    position: relative;
    text-align: center;
    z-index: 2;

    .big-title {
      ${position("absolute", "-20px", null, null, null)}
      color: ${gray[200]};
      font-family: "square721_cn_btbold";
      font-size: 130px;
      font-weight: 800;
      letter-spacing: 0.024em;
      text-transform: uppercase;
      width: 100%;
    }

    h2 {
      position: relative;
      color: ${gray[700]};
      font-size: 43px;
      line-height: 1.2em;
      margin: 0;
    }
  }

  ${({ bgColor }) => {
    switch (bgColor) {
      case "black":
        return css`
          background: ${gray[800]};
          .sec-title {
            .big-title {
              color: ${rgba(white, 0.1)};
            }

            h2 {
              color: ${white};
            }
          }
        `;
      case "red":
        return css`
          background: ${red[400]};

          .sec-title {
            .big-title {
              color: ${rgba(red[100], 0.2)};
            }

            h2 {
              color: ${red[100]};
            }
          }
        `;

      case "grey":
        return css`
          background: ${gray[100]};

          .sec-title {
            .big-title {
              color: ${rgba(black, 0.12)};
            }

            h2 {
              color: ${gray[800]};
            }
          }
        `;

      default:
        return css`
          background: ${white};
          .sec-title {
            .big-title {
              color: ${gray[200]};
            }

            h2 {
              color: ${gray[700]};
            }
          }
        `;
    }
  }}
`;

export const StyledPageTitle = styled(SmallSection)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;

  h1 {
    font-family: "Maisonneue Bold";
    font-size: 64px;
    margin: 0 auto 12px;
    max-width: 650px;
  }
`;
