import styled from "styled-components";
import { clearFix, size, position } from "polished";
import Form from "./Form";

export const StyledContactFormSection = styled.section`
  ${clearFix()};
  z-index: 2;
  position: relative;
  background: #f4f5f8;
`;

export const StyledContactForm = styled.div`
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
  float: left;
  margin: -10% auto 10%;
  padding: 45px 24px 30px;
  position: relative;
  width: 100%;

  dl {
    margin: 0;
    margin-top: 12px;
  }

  dd {
    margin-left: 0;
  }

  .fancy-title {
    margin-bottom: 2.5em;
    position: relative;

    h2,
    h3,
    h4 {
      margin: 0.25em 0;
    }

    > {
      :first-child {
        margin-top: 0;
      }

      :last-child {
        margin-bottom: 0;
      }
    }
  }

  ${Form} {
    max-width: 600px;
  }
`;

export const StyledIconList = styled.div`
  position: relative;

  &.bottom-spacing-small {
    padding-bottom: 12px;
  }

  &.bottom-spacing-medium {
    padding-bottom: 36px;
  }

  &.bottom-spacing-large {
    padding-bottom: 55px;
  }

  .nm-feature-icon {
    display: block;
    font-size: 38px;
    line-height: 38px;
    color: #282828;
    width: 80px;
    height: 80px;
    text-align: center;
    margin-bottom: 21px;

    svg {
      display: block;
      cursor: default;
      height: 32px;
    }

    img {
      display: block;
      width: auto;
      max-width: 100%;
      height: auto;
    }
  }

  &.layout-centered {
    text-align: center;

    .nm-feature-icon {
      margin-right: auto;
      margin-left: auto;

      img {
        margin-right: auto;
        margin-left: auto;
      }
    }

    &.icon-style-simple .nm-feature-icon {
      width: auto;
      height: auto;
    }
  }

  h2 {
    margin: 0;
    font-size: 22px;
    line-height: 1.4;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: #888;
    margin-bottom: 2px;
  }

  .wpb_text_column {
    margin-top: 12px;
  }

  .vc_btn {
    display: inline-block;
    margin-top: 15px;
  }

  &.layout-icon_left {
    padding-left: 93px;

    .nm-feature-icon {
      ${size("68px")}
      ${position("absolute", 0, null, null, 0)};
      font-size: 34px;
      line-height: 34px;
    }

    &.icon-style-simple {
      padding-left: 54px;

      .nm-feature-icon {
        width: auto;
        height: auto;
      }
    }

    &.icon-style-background .nm-feature-icon {
      padding-top: 17px;
    }

    &.icon-style-border .nm-feature-icon {
      padding-top: 15px;
    }

    &.icon-style-image-default .nm-feature-icon,
    &.icon-style-image-rounded .nm-feature-icon {
      padding: 0;
    }
  }

  &.icon-style-simple {
    .nm-feature-icon {
      font-size: 52px;
      line-height: 52px;
    }
  }

  &.layout-default.icon-style-simple .nm-feature-icon {
    width: auto;
    height: auto;
    text-align: left;
  }

  &.icon-style-image-default .nm-feature-icon {
    width: auto;
    height: auto;
  }

  &.icon-style-image-rounded .nm-feature-icon {
    width: auto;
    height: auto;

    img {
      overflow: hidden;
      border-radius: 50%;
    }
  }

  &.icon-style-background .nm-feature-icon {
    overflow: hidden;
    border-radius: 50%;
    color: #fff;
    padding-top: 21px;
    background: #1a1a1a;
  }

  &.icon-style-border .nm-feature-icon {
    overflow: hidden;
    border-radius: 50%;
    padding-top: 19px;
    border: 2px solid #282828;
  }
`;
