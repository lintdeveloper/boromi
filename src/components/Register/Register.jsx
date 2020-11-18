import React from "react";
import './Register.css';
import RegisterForm from "./component/RegisterForm";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { registerUserRequest } from "../../actions/auth";

function Register(props) {
  const { registerUserRequest } = props;
  return (
    <div id="register">
      <div className="container">
        <div className="justify-content-center row align-items-center">
          <div className="col-lg-6">
            <RegisterForm registerUserRequest={registerUserRequest}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { registerUserRequest })(Register)

Register.propTypes = {
  registerUserRequest: PropTypes.func.isRequired
} 