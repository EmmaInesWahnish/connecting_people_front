import axios from "axios";
import urlPath from "./url.path.js";

const login = async (params) => {

  const response = await axios.post(urlPath.login, params,{headers: urlPath.headers}) ;

  return response.data;
};

export { login };
