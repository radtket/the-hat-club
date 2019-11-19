import React from "react";
import styled from "styled-components";

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
`;

const BigTitle = () => {
  return (
    <Styles>
      <div className="sec-title centered">
        <div className="big-title">YOUR ACCOUNT</div>
        <h2>Welcome Taylor</h2>
      </div>
    </Styles>
  );
};

export default BigTitle;
