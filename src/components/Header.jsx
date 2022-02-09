import React, { useContext, useRef } from "react";
import "../styles/Header.scss";
import menuImg from "../assets/icons/icon_menu.svg";
import iconoShop from "../assets/icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContex";
import Menu from "./Menu";
import MyOrder from "../containers/MyOrder";

const Header = () => {
  const {
    state,
    infoInput,
    showOrder,
    setShowOrder,
    showMenu,
    setShowMenu,
    toggle,
  } = useContext(AppContext);

  let total = state.cart.reduce((a, b) => a + b.quantity, 0);

  const refImg = useRef();

  toggle && refImg.current.classList.remove("toggleMenu");

  const handleMenuPhone = () => {
    refImg.current.classList.toggle("toggleMenu");
    showOrder && setShowOrder(false);
    showMenu && setShowMenu(false);
  };

  const handleClickEmail = () => {
    setShowMenu(!showMenu);
    showOrder && setShowOrder(false);
    refImg.current.classList[1] && handleMenuPhone();
  };

  const handleClickOrder = () => {
    setShowOrder(!showOrder);
    showMenu && setShowMenu(false);
    refImg.current.classList[1] && handleMenuPhone();
  };

  return (
    <nav>
      <img
        src={menuImg}
        alt="menu"
        className="menu"
        onClick={handleMenuPhone}
      />
      <div className="navbar-left" ref={refImg}>
        <ul>
          <li>
            <a href="/home">All</a>
          </li>
          <li>
            <a href="/home">Clothes</a>
          </li>
          <li>
            <a href="/home">Electronics</a>
          </li>
          <li>
            <a href="/home">Furnitures</a>
          </li>
          <li>
            <a href="/home">Toys</a>
          </li>
          <li>
            <a href="/home">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleClickEmail}>
            {infoInput.email || "correo@ejemplo.com"}
          </li>

          <li className="navbar-shopping-cart" onClick={handleClickOrder}>
            <img src={iconoShop} alt="shopping cart" />
            {total > 0 && <div>{total}</div>}
          </li>
        </ul>
        {showMenu && <Menu />}
        {showOrder && (
          <MyOrder showOrder={showOrder} setShowOrder={setShowOrder} />
        )}
      </div>
    </nav>
  );
};

export default Header;
