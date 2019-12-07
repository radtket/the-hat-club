import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Styles = styled.div`
  position: relative;
  overflow: hidden;
  padding: 180px 0px 100px;
  line-height: 1.7em;
  font-weight: 400;

  .sec-title {
    position: relative;
    margin-bottom: 85px;
    z-index: 2;
    text-align: center;

    .big-title {
      position: absolute;
      top: -20px;
      width: 100%;
      font-size: 130px;
      font-weight: 800;
      color: #f6f6f6;
      text-transform: uppercase;
      font-family: "square721_cn_btbold";
      letter-spacing: 0.024em;
    }

    h2 {
      position: relative;
      color: #333333;
      font-size: 43px;
      line-height: 1.2em;
      margin: 0px;
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
              color: #272727;
            }
          }
        `;

      default:
        return css`
          background: #fff;
          .sec-title {
            .big-title {
              color: #f6f6f6;
            }

            h2 {
              color: #333333;
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
