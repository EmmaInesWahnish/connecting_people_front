import React, { useState } from "react";
import Cookies from "js-cookie";
import { AuthService } from "../services";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useGlobalContext();

  const navigate = useNavigate();
  
	const isLocalEnv = process.env.NODE_ENV === 'development';
	let myDomain;
	if (isLocalEnv) {
		myDomain = 'localhost';
	} else {
		myDomain = '.groovinads.com';
	}

  const handleLogin = async () => {
    try {
      const resp = await AuthService.login({email, password});
      console.log("Authenticated ",resp)
      setUserData(resp?.payload);
      Cookies.set('groovinadsConnectToken', resp?.data, {
        domain: myDomain,
      });
        // Go to HOME
      navigate("/home");
    } catch (error) {
      // Go to LOGIN
      console.log("Not authenticated ",error)
      navigate("/authenticate");
    }
  };

  return (
    <div className="full_hieght p-0 row justify-content-center align-items-center bg_grey">
      <div className="card col-4">
        <div className="card-body">
          <h5 className="card-title text-center mt-4">Login</h5>

          <div>
            <div className="mt-5 mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-5 mb-5">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="row justify-content-end me-1">
              <button
                className="btn login_button me-0"
                onClick={() => handleLogin()}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
