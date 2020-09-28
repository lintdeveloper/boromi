import React from "react";
import './Register.css';
import RegisterForm from "./component/RegisterForm";

const Register = () => {
  return (
    <div id="register">
      <div className="container">
        <div className="justify-content-center row align-items-center">
          <div className="col-lg-6">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;