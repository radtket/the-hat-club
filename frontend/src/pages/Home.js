import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { ALL_ITEMS_QUERY } from "../reslovers/Query";

const Home = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.items.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
