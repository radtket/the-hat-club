import React from "react";
import { RequestPasswordReset, PageSection } from "../components";

const LostPassword = () => {
  return (
    <PageSection
      className="container"
      style={{
        maxWidth: 670,
      }}
    >
      <p>
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email.
      </p>
      <RequestPasswordReset />
    </PageSection>
  );
};

export default LostPassword;
