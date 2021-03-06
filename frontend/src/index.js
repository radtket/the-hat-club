import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import { client } from "./utils/client-apollo";
import Theme from "./utils/theme";
import "simple-react-notifications/dist/index.css";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Theme>
    <Router>
      <ApolloProvider {...{ client }}>
        <ScrollToTop />
        <Routes />
      </ApolloProvider>
    </Router>
  </Theme>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
