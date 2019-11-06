import React from "react";
import styled from "styled-components";
import { SignIn, SignUp, RequestPasswordReset } from "../components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Signup = () => {
  return (
    <Columns className="container">
      <SignIn />
      <SignUp />
      <RequestPasswordReset />
    </Columns>
  );
};

export default Signup;
