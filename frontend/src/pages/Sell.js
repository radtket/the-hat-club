import React from "react";
import CreateItemForm from "../components/CreateItemForm";
import PleaseSignIn from "../components/PleaseSignIn";
import PageTitle from "../components/PageTitle";

const Sell = () => {
  return (
    <div>
      <PageTitle title="Sell" />
      <PleaseSignIn>
        <CreateItemForm />
      </PleaseSignIn>
    </div>
  );
};

export default Sell;
