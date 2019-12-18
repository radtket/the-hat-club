import { keyframes } from "styled-components";
import { loadingColors } from "../utils/colors";

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const MoveUpDown = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -6px, 0);
  }
`;

const right = keyframes`
    0% {
      transform: translate(-15px);
    }

    50% {
      transform: translate(15px);
    }

    100% {
      transform: translate(-15px);
    }
`;

const left = keyframes`
    0% {
      transform: translate(15px);
    }

    50% {
      transform: translate(-15px);
    }

    100% {
      transform: translate(15px);
    }
`;

const rotate = keyframes`
    0% {
      transform: rotate(0deg) scale(0.8);
    }

    50% {
      transform: rotate(360deg) scale(1.2);
    }

    100% {
      transform: rotate(720deg) scale(0.8);
    }
`;

const ball1 = keyframes`
    0% {
      box-shadow: 30px 0 0 ${loadingColors.yellow};
    }

    50% {
      box-shadow: 0 0 0 ${loadingColors.yellow};
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }

    100% {
      box-shadow: 30px 0 0 ${loadingColors.yellow};
      margin-bottom: 10px;
    }
`;

const ball2 = keyframes`
    0% {
      box-shadow: 30px 0 0 ${loadingColors.green};
    }

    50% {
      box-shadow: 0 0 0 ${loadingColors.green};
      margin-top: -20px;
      transform: translate(15px, 15px);
    }

    100% {
      box-shadow: 30px 0 0 ${loadingColors.green};
      margin-top: 0;
    }
`;

export { ball1, ball2, glow, left, MoveUpDown, right, rotate };
