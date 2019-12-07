import React from "react";
import { useQuery } from "react-apollo";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import SignIn from "./SignIn";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const PleaseSignIn = ({ children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return <LoadingSpinner />;
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
