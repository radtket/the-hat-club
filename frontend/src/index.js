import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { client } from "./utils/client-apollo";
import Theme from "./utils/theme";
import "simple-react-notifications/dist/index.css";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <Router>
        <ApolloProvider {...{ client }}>
          <ScrollToTop />
          <Routes />
        </ApolloProvider>
      </Router>
    </Theme>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
