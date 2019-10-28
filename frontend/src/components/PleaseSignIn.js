import React from "react";
import { useQuery } from "react-apollo";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import SignIn from "./SignIn";
import ErrorMessage from "./ErrorMessage";

const PleaseSignIn = ({ children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  if (!data.me) {
    return (
      <div>
        <p>Please Sign In before Continuing</p>
        <SignIn />
      </div>
    );
  }

  return children;
};

export default PleaseSignIn;
