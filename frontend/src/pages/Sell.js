import React from "react";

import {
  PageTitle,
  PleaseSignIn,
  CreateItemForm,
  SmallSection,
} from "../components";

const Sell = () => {
  return (
    <>
      <PageTitle title="Sell" />
      <SmallSection className="container">
        <PleaseSignIn>
          <CreateItemForm />
        </PleaseSignIn>
      </SmallSection>
    </>
  );
};

export default Sell;
