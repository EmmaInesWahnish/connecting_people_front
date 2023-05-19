import axios from "axios";
import urlPath from "./url.path.js";

const login = async (params) => {
  const argument = {
    params,
    headers: urlPath.headers,
  }

  const response = await axios.get(urlPath.login, {
    params,
    headers: urlPath.headers,
  });

  return response.data;
};

export { login };
