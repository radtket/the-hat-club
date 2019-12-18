import styled from "styled-components";
import { white, red, black, gray } from "../utils/colors";
import { rgba } from "../utils/helpers";
import { SmallSection } from "./General";
import Form from "./Form";
import { TabPanel } from "../components";

export const StyledRow = styled(SmallSection)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const StyledAboutPage = styled.div`
  h2 {
    font-size: 32px;
    margin: 0;
    /* font-family: "Maisonneue Bold"; */
  }

  p {
    font-size: 18px;
    line-height: 1.7;
  }

  img {
    border-radius: 6px;
    box-shadow: ${rgba(black, 0.3)} 0px 10px 20px 0px;
    display: block;
    margin: auto;
    position: relative;
  }

  svg {
    display: block;
    fill: ${red[300]};
    margin: auto;
    max-height: 200px;
  }

  .bg-red {
    background: ${red[400]};
    color: ${white};
  }

  .bg-gray {
    background: ${gray[100]};
    color: ${gray[800]};
  }

  .bg-black {
    background: ${gray[800]};
    color: ${white};
  }
`;

export const StyledAccountDetails = styled.div`
  ${Form} {
    margin-bottom: 48px;

    legend {
      font-size: 24px;
      margin-bottom: 16px;
    }
  }
`;

export const StyledAboutTabContent = styled(TabPanel)`
  h2 {
    font-weight: normal;
    margin-top: 0;
  }
`;
