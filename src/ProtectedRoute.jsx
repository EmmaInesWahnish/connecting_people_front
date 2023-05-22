/**
 * ProtectedRoute prevents users from using unauthorized routes.<br>
 * In this way, the routes are protected.
 * @module
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ redirectPath, children }) => {
  const navigate = useNavigate();

  const auth_token = Cookies.get('groovinadsConnectToken');

  const authorizedAccess = () => {
    if (!auth_token) {
      console.log("No hay token", redirectPath);
      return navigate(redirectPath, { replace: true });
    }
  };

  useEffect(() => {
	authorizedAccess();
  }, [auth_token]);

  return children;
};

export default ProtectedRoute;
