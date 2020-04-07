import Keycloak from "keycloak-js";

const keycloak = new Keycloak("/keycloak.json");
keycloak.init({
  onLoad: "login-required",
  checkLoginIframeInterval: 20,
  flow: "standard",
  enableLogging: true,
  maxAge: 80000,
});
keycloak.updateToken(180);

export default keycloak;
