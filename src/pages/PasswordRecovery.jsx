import React from "react";
import "../styles/PasswordRecovery.scss";
import logoYard from "../assets/logos/logo_yard_sale.svg";
import { Link } from "react-router-dom";

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <img src={logoYard} alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" id="email" className="input input-email" />
          <Link to="/send-email">
            <input
              type="submit"
              value="Confirm"
              className="primary-button login-button"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
