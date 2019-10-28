import React from "react";
import CreateItemForm from "../components/CreateItemForm";
import PleaseSignIn from "../components/PleaseSignIn";

const Sell = () => {
  return (
    <div>
      <h1>Sell</h1>
      <PleaseSignIn>
        <CreateItemForm />
      </PleaseSignIn>
    </div>
  );
};

export default Sell;
