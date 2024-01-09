import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
  <GoogleOAuthProvider clientId="281025533379-alhv0agkfflljnb855d7ibmdu90uvqtb.apps.googleusercontent.com">
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </>
);
