import React from "react";
import "../styles/NewPassword.scss";
import logoYard from "../assets/logos/logo_yard_sale.svg";
import { Link } from "react-router-dom";

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={logoYard} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>
        <form className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <label htmlFor="new-password" className="label">
            Repeat password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <Link to="/home">
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

export default NewPassword;
