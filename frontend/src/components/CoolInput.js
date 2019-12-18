import React from "react";
import { StyledCoolInput } from "../styles/Inputs";

const CoolInput = () => {
  return (
    <StyledCoolInput htmlFor="inp">
      <input id="inp" placeholder="&nbsp;" type="text" />
      <span className="label">Label</span>
      <span className="border" />
    </StyledCoolInput>
  );
};

export default CoolInput;
