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
    {/* <Auth0Provider
      domain="hiep-fk.us.auth0.com"
      clientId="ihffhPomrK6CsBd152cF3NWGkim0Tp2D"
      redirectUrl={window.location.origin}
    > */}
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

// hiep-fk.us.auth0.com

// ihffhPomrK6CsBd152cF3NWGkim0Tp2D

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
