import React from "react";
import "../styles/SendEmail.scss";
import logoYard from "../assets/logos/logo_yard_sale.svg";
import iconEmail from "../assets/icons/email.svg";
import { Link } from "react-router-dom";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <img src={logoYard} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={iconEmail} alt="email" />
        </div>
        <Link to="/new-password">
          <button className="primary-button login-button">Confirm</button>
        </Link>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/send-email">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
