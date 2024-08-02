import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RestProvider } from "./contextApi/Context";
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-baji4mahqr5lvz2r.us.auth0.com"
    clientId="hIM6dWNvEgdGbl9DJniTbqKF1vTEGja4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <RestProvider>
        <App />
      </RestProvider>
    </BrowserRouter>
    </Auth0Provider>
 
);
