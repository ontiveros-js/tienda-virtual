import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import "../styles/Checkout.scss";
import iconArrow from "../assets/icons/back.png";
import AppContext from "../context/AppContex";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    let total = state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    return total;
  };

  const messageF = [
    "cuando las vacas vuelen",
    "antes de que puedas decir esternocleidomastoideo",
    "el día que los calvos se peinen",
    "cuando un mudo le diga a un sordo hola",
    "cuando el mar se seque",
  ];

  const handleConf = () => {
    Swal.fire(
      `👏🏻 Felicitaciones por tu compra. LLegará ${
        messageF[parseInt(Math.random() * 4)]
      }`
    );
  };

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <div className="div-title">
          <Link to="/home">
            <img src={iconArrow} alt="arrow" />
          </Link>
          <h1 className="title">My order</h1>
        </div>
        {state.cart.map((el, index) => (
          <OrderItem datos={el} key={el.id + index} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <div>
          {state.cart.length > 0 ? (
            <button onClick={handleConf} className="primary-button">
              Confirmar
            </button>
          ) : (
            <Link to="/home">
              <button className="primary-button">
                No has agregado nada al carrito aun
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
