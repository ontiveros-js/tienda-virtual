import React, { useRef, useContext } from "react";
import "../styles/Login.scss";
import Swal from "sweetalert2";
import logoYard from "../assets/logos/logo_yard_sale.svg";
import AppContext from "../context/AppContex";
import { Link } from "react-router-dom";

const Login = () => {
  const ref = useRef(null);
  const { infoInput, setInfoInput } = useContext(AppContext);

  const handleChange = (e) => {
    setInfoInput({
      ...infoInput,
      [e.target.name]: e.target.value,
    });
  };

  const handlerClickLogin = () => {
    let msg;
    if (infoInput.password && infoInput.email)
      msg = `tu contraseña "${infoInput.password}" la guardará Zuckerberg, él sabrá que hacer con ella`;

    if (infoInput.password && !infoInput.email)
      msg = `No escribiste el correo. No confías  en nosotros?`;

    if (!infoInput.password && infoInput.email)
      msg = `No escribiste la contraseña. No confías en nosotros?`;

    if (!infoInput.password && !infoInput.email)
      msg = `No llenaste los campos. Sabes llenar un formulario?`;

    Swal.fire(msg);
  };

  return (
    <div className="Login">
       <h3 className="Login-h3">
        Introduce cualquier dato y dale a login o a cualquiera de los botones.
        Esto es solo una prueba
      </h3>
      <div className="Login-container">
        <img src={logoYard} alt="logo" className="logo" />
        <form onSubmit={(e) => e.preventDefault()} className="form" ref={ref}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={infoInput.email}
            placeholder="correo@ejemplo.com"
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
          <Link to="/home" style={{ color: "white" }}>
            <button
              type="submit"
              className="primary-button login-button"
              onClick={handlerClickLogin}
            >
              Log in
            </button>
          </Link>
        </form>
        <Link to="/password-recovery">Forgot my password</Link>
        <Link to="/signup"> 
          <button className="secondary-button signup-button">Sign up</button>
         </Link> 
      </div> 
    </div>
  );
};

export default Login;
