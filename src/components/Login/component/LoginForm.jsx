import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, errors } =  useForm();

  const onSubmit =(data) => {
    console.log(data);
  }

  return (
    <form className="form signin-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="manifest">
        <h3 className="header text-center">Welcome back</h3>
        <p className="body text-center">Sign into your boromi account</p>
      </div>
      <div className="form-group">
        <label className="label">Email Address</label>
        <input type="email" className="form-control" placeholder="jondoe@gmail.com" name="email address" ref={register({
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
        <input type="password" className="form-control" placeholder="••••••" name="password"
        ref={register({required: "Password is required", minLength:{value: 8, message: "Password can't be less than 8 characters"}, })} />  
        {errors.password && <p className="message text-danger">{errors.password.message}</p>}
    </div>
      <button type="submit" className="btn btn-md btn-primary btn-block mt-4 mb-4" name="button" value="submit">Sign In</button>
      <p className="message text-center">Forgot password?</p>
      <p className="message text-center mb-0">Don&apos;t have an account? 
        <Link to="/register"> Create an account</Link>
      </p>
    </form>
  );
}