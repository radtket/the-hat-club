import React from "react";
import CreateItemForm from "../components/CreateItemForm";
import PleaseSignIn from "../components/PleaseSignIn";
import PageTitle from "../components/PageTitle";

const Sell = () => {
  return (
    <>
      <PageTitle title="Sell" />
      <section className="container">
        <PleaseSignIn>
          <CreateItemForm />
        </PleaseSignIn>
      </section>
    </>
  );
};

export default Sell;
