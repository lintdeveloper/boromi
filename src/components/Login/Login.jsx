import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

// import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from 'react-router-dom';
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import PropTypes from 'prop-types';

// import { login } from "../../actions/auth";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

const Login = () => {
  // const form = useRef();
  // const checkBtn = useRef();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  // const { isLoggedIn } = useSelector(state => state.auth);
  // const { message } = useSelector(state => state.message);

  // const dispatch = useDispatch();

  // const onChangeUsername = (e) => {
  //   const username = e.target.value;
  //   setUsername(username);
  // };

  // const onChangePassword = (e) => {
  //   const password = e.target.value;
  //   setPassword(password);
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   form.current.validateAll();

  //   if (checkBtn.current.context._errors.length === 0) {
  //     dispatch(login(username, password))
  //       .then(() => {
  //         props.history.push("/profile");
  //         window.location.reload();
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   } else {
  //     setLoading(false);
  //   }
  // };

  // if (isLoggedIn) {
  //   return <Redirect to="/profile" />;
  // }

  return (
    <div id="login">
      <div className="container">
        <div className="row justify-content-center align-items-center top-spacer">
          <div className="col-md-10 col-lg-6">
            <form className="form signin-form">
              <div className="manifest">
                <h3 className="header text-center">Welcome back</h3>
                <p className="body text-center">Sign into your boromi account</p>
              </div>
              <div className="form-group">
                <label className="label">Email Address</label>
                <input type="email" className="form-control" placeholder="jondoe@gmail.com" name="email address"></input>
                <div className="form-group">
                  <label className="label">Password</label>
                  <input type="password" className="form-control" placeholder="••••••" name="password"></input>
                </div>
                <button type="submit" className="btn btn-md btn-primary btn-block mt-4 mb-4" name="button" value="submit">Sign In</button>
                <p className="message text-center">Forgot password?</p>
                <p className="message text-center mb-0">Don&apos;t have an account? 
                  <Link to="/register"> Create an account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* <Form onSubmit={handleLogin} ref={form}>
<div className="form-group">
  <label htmlFor="username">Username</label>
  <Input
    type="text"
    className="form-control"
    name="username"
    value={username}
    onChange={onChangeUsername}
    validations={[required]}
  />
</div>

<div className="form-group">
  <label htmlFor="password">Password</label>
  <Input
    type="password"
    className="form-control"
    name="password"
    value={password}
    onChange={onChangePassword}
    validations={[required]}
  />
</div>

<div className="form-group">
  <button className="btn btn-primary btn-block" disabled={loading}>
    {loading && (
      <span className="spinner-border spinner-border-sm"></span>
    )}
    <span>Login</span>
  </button>
</div>

{message && (
  <div className="form-group">
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  </div>
)}
<CheckButton style={{ display: "none" }} ref={checkBtn} />
</Form> */}

// Login.propTypes = {
//     history: PropTypes.any
// }

export default Login;