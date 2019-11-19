import React from "react";

import { PleaseSignIn, CreateItemForm, SmallSection } from "../components";
import BigTitle from "../components/BigTitle";
import BigCallout from "../components/BigCallout";

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
