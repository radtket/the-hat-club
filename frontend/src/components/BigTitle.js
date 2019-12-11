import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { position } from "polished";
import { rgba } from "../utils/helpers";
import { black, white, gray, red } from "../utils/colors";

const Styles = styled.div`
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

const BigTitle = ({ accent, title, bgColor }) => {
  return (
    <Styles {...{ bgColor }}>
      <div className="sec-title centered">
        <div className="big-title">{accent}</div>
        <h2>{title}</h2>
      </div>
    </Styles>
  );
};

BigTitle.propTypes = {
  accent: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
};

BigTitle.defaultProps = {
  accent: null,
  title: null,
  bgColor: null,
};

export default BigTitle;
