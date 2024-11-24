import React from "react";
import "./AuthForm.css";

const AuthForm = () => {
  return (
    <div className="auth-form">
      <h2>Please Enter your Account details</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Johndoe@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
        <a href="#" className="forgot-password">Forgot Password</a>
        <button className="sign-in-button">Sign in</button>
      </form>
      {/* <div className="social-login">
        <button className="google">G</button>
        <button className="github">GH</button>
        <button className="facebook">F</button>
      </div> */}
      <div className="d-flex justify-content-end">
        <div>
      <a href="#" className="create-account">Create an account</a></div>
      </div>
    </div>
  );
};

export default AuthForm;
