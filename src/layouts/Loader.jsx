import React, { useEffect } from "react";
import { AuthService } from "../services";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// CONTEXTS
import { useGlobalContext } from "../contexts";

const Loader = () => {

  const { setUserData } = useGlobalContext();

  const token = localStorage.getItem("GroovinPracticaToken");

  console.log("auth_token >>>> ", token);

  const navigate = useNavigate();

  const checkToken = async () => {
    if (!token) {
      // Go to LOGIN
      navigate("/authenticate");
    } else {
      // Check if token is valid
      // If valid, go to HOME
      // If not valid, go to LOGIN
      try {
        const user = await AuthService.login({token});
        delete user.token;
        setUserData(user);
        // Go to HOME
        navigate("/home");
      } catch (error) {
        // Go to LOGIN
        navigate("/authenticate");
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return <div>Loading...</div>;
};

export default Loader;
