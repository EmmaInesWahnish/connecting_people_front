const basePath = "http://localhost:8080/";

export default {
  login: basePath + "api/sessions/login",

  /* AUTHENTICATION */

  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
};
