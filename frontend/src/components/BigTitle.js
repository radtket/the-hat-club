import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { position } from "polished";

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
      color: #eee;
      font-family: "square721_cn_btbold";
      font-size: 130px;
      font-weight: 800;
      letter-spacing: 0.024em;
      text-transform: uppercase;
      width: 100%;
    }

    h2 {
      position: relative;
      color: #333;
      font-size: 43px;
      line-height: 1.2em;
      margin: 0;
    }
  }

  ${({ bgColor }) => {
    switch (bgColor) {
      case "black":
        return css`
          /* background: #24262b; */
          background: #1c1c1c;
          .sec-title {
            .big-title {
              color: rgba(255, 255, 255, 0.1);
            }

            h2 {
              color: #ffffff;
            }
          }
        `;
      case "red":
        return css`
          background: #ee5050;

          .sec-title {
            .big-title {
              color: rgba(160, 39, 39, 0.2);
            }

            h2 {
              color: #a02727;
            }
          }
        `;

      case "grey":
        return css`
          background: #f4f4f7;

          .sec-title {
            .big-title {
              color: rgba(0, 0, 0, 0.1);
            }

            h2 {
              color: #242424;
            }
          }
        `;

      default:
        return css`
          background: #fff;
          .sec-title {
            .big-title {
              color: #eee;
            }

            h2 {
              color: #333;
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
