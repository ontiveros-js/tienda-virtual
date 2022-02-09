import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContex";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  const { infoInput, setInfoInput } = useContext(AppContext);

  const handleChange = (e) => {
    setInfoInput({
      ...infoInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">Pid Sajot</p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={infoInput.email}
              placeholder={infoInput.email}
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={infoInput.password}
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <Link to="/home" className="secondary-button login-button">
            <span>Edit</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
