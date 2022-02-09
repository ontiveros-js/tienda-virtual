import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContex";
import "../styles/Menu.scss";

const Menu = () => {
  const { setShowMenu } = useContext(AppContext);

  return (
    <div className="Menu">
      <ul>
        <li onClick={() => setShowMenu(false)}>
          <Link to="/checkout">My orders</Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link to="/account">My account</Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link to="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
