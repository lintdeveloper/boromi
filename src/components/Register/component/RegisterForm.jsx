import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit, errors } =  useForm();

  const onSubmit =(data) => {
    console.log(data);
  }

  return (
    <form className="form signup-form form pl-lg-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="justify-content-center row top-spacer">
        <h3 className="header text-center text-sm-left">Create an account</h3>
        <p className="body text-center text-sm-left pb-4">Set up your account and start borrowing in no time with no collateral</p>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label className="label">First name</label>
            <input type="text" className="form-control" placeholder="Jon" name="firstName" ref={register({required: "First name is required"})} />
            {errors.firstName && <p className="message text-danger">{errors.firstName.message}</p>}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="label">Last name</label>
            <input type="text" className="form-control" placeholder="Doe" name="lastName" ref={register({required: "Last name is required"})} />
            {errors.lastName && <p className="message text-danger">{errors.lastName.message}</p>}
          </div>
        </div>
      </div>
    <div className="form-group">
      <label className="label">Email address</label>
      <input type="email" className="form-control" placeholder="jondoe@gmail.com" name="email" ref={register({
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })} />
      {errors.email && <p className="message text-danger">{errors.email.message}</p>}
    </div>
    <div className="form-group">
      <label className="label">Password</label>
      <input type="password" className="form-control" placeholder="•••••••" name="password" 
       ref={register({required: "Password is required", minLength:{value: 8, message: "Password can't be less than 8 characters"}, })}/>
      {errors.password && <p className="message text-danger">{errors.password.message}</p>}
    </div>
      <button type="submit" className="btn btn-md btn-primary btn-block mt-4 mb-4" value="submit" name="submit"> Create Account</button>
      <p className="message text-center mx-auto mb-4"> By clicking ‘create account’, you agree to Boromi’s
        <a href="/#"> terms &amp; conditions</a> and <a href="/#">privacy policy.</a>
      </p>
      <p className="message text-center mx-auto">
        Have an account?  <Link to="/login"> Sign in.</Link>
      </p>
  </form>
  );
}