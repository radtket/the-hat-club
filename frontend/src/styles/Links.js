import { Link } from "react-router-dom";
import { position } from "polished";
import styled from "styled-components";
import { black } from "../utils/colors";

export const ResetPasswordLink = styled(Link)`
  ${position("absolute", null, "20px", 0, null)}
  color: ${black};
  font-family: "Maisonneue Bold";
  /* Size of Input Height */
  line-height: 38px;
`;
