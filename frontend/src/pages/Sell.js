import React from "react";
import {
  BigTitle,
  BigCallout,
  PleaseSignIn,
  CreateItemForm,
  SmallSection,
} from "../components";

const Sell = () => {
  return (
    <>
      <BigCallout>
        List Your Item, <br />
        For Sale.
      </BigCallout>
      <BigTitle accent="For Sale" title="List Your Item" />
      <SmallSection className="container">
        <PleaseSignIn>
          <CreateItemForm />
        </PleaseSignIn>
      </SmallSection>
    </>
  );
};

export default Sell;
