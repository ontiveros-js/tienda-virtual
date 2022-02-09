import React from "react";
import { Link } from "react-router-dom";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Pid sa jot"
              className="input input-name"
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="correo@ejemplo.com"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <Link to="/home">
            <input
              type="submit"
              value="Create"
              className="primary-button login-button"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
