import React from "react";
import "./Login.css";
import LoginForm from "./component/LoginForm";

const Login = () => {
  return (
    <div id="login">
      <div className="container">
        <div className="row justify-content-center align-items-center top-spacer">
          <div className="col-md-10 col-lg-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;