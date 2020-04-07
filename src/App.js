import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

// Wrap everything inside KeycloakProvider
const App = () => {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <>
        <Nav />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    </KeycloakProvider>
  );
};

export default App;
