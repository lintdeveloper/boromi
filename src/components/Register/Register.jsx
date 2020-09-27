import React from "react";
import './Register.css';
import { Link } from "react-router-dom";

// import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";

// import { register } from "../../actions/auth";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

const Register = () => {
  // const form = useRef();
  // const checkBtn = useRef();

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [successful, setSuccessful] = useState(false);

  // const { message } = useSelector(state => state.message);
  // const dispatch = useDispatch();

  // const onChangeUsername = (e) => {
  //   const username = e.target.value;
  //   setUsername(username);
  // };

  // const onChangeEmail = (e) => {
  //   const email = e.target.value;
  //   setEmail(email);
  // };

  // const onChangePassword = (e) => {
  //   const password = e.target.value;
  //   setPassword(password);
  // };

  // const handleRegister = (e) => {
  //   e.preventDefault();

  //   setSuccessful(false);

  //   form.current.validateAll();

  //   if (checkBtn.current.context._errors.length === 0) {
  //     dispatch(register(username, email, password))
  //       .then(() => {
  //         setSuccessful(true);
  //       })
  //       .catch(() => {
  //         setSuccessful(false);
  //       });
  //   }
  // };

  return (
    <div id="register">
      <div className="container">
        <div className="justify-content-center row align-items-center">
          <div className="col-lg-6">
            <form className="form signup-form form pl-lg-4">
              <div className="justify-content-center row top-spacer">
                <h3 className="header text-center text-sm-left">Create an account</h3>
                <p className="body text-center text-sm-left pb-4">Set up your account and start borrowing in no time with no collateral</p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="label">First name</label>
                    <input type="text" className="form-control" placeholder="Jon" name="first name"></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="label">Last name</label>
                    <input type="text" className="form-control" placeholder="Doe" name="last name"></input>
                  </div>
                </div>
              </div>
            <div className="form-group">
              <label className="label">Email address</label>
              <input type="email" className="form-control" placeholder="jondoe@gmail.com" name="email address"></input>
            </div>
            <div className="form-group">
              <label className="label">Password</label>
              <input type="password" className="form-control" placeholder="•••••••" name="password"></input>
            </div>
              <button type="submit" className="btn btn-md btn-primary btn-block mt-4 mb-4" value="submit" name="submit"> Create Account</button>
              <p className="message text-center mx-auto mb-4"> By clicking ‘create account’, you agree to Boromi’s
                <a href="#"> terms &amp; conditions</a> and <a href="#">privacy policy.</a>
              </p>
              <p className="message text-center mx-auto">
                Have an account?  <Link to="/login"> Sign in.</Link>
              </p>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

{/* <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
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
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      </div> */}
export default Register;