import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const Domain = process.env.REACT_APP_DOMAIN;
const ClientId = process.env.REACT_APP_CLIENTID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={Domain}
      clientId={ClientId}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
