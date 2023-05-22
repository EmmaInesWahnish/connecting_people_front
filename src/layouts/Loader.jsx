import React, { useEffect } from "react";
import { AuthService } from "../services";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// CONTEXTS
import { useGlobalContext } from "../contexts";

const Loader = () => {
  const { userData } = useGlobalContext();

  const navigate = useNavigate();

  const checkUserData = async () => {
    if (Object.entries(userData).length === 0) {
      // Go to LOGIN
      navigate("/authenticate");
    } else {
      navigate("/home");
    }
  };

  useEffect(() => {
    checkUserData();
  }, []);

  return <div>Loading...</div>;
};

export default Loader;
