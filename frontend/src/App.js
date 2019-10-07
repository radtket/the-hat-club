import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    name: "",
    greeting: "",
  });

  const handleChange = event => {
    setState({ name: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(state.name)}`)
      .then(response => response.json())
      .then(newState => setState(newState));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: </label>
        <input
          id="name"
          onChange={handleChange}
          type="text"
          value={state.name}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{state.greeting}</p>
    </div>
  );
};

export default App;
