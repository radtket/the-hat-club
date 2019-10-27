import React from "react";
import { useQuery } from "react-apollo";
import ErrorMessage from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "../reslovers/Query";

const User = () => {
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  if (!data.me) {
    return null;
  }

  return (
    <ul>
      <li>{data.me.name}</li>
      <li>{data.me.email}</li>
    </ul>
  );
};

export default User;
