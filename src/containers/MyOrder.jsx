import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContex";
import "../styles/MyOrder.scss";
import iconArrow from "../assets/icons/flechita.svg";
import { Link } from "react-router-dom";

const MyOrder = ({ showOrder, setShowOrder }) => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    let total = state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    return total;
  };

  return (
    <section className="containerMO" onClick={() => setShowOrder(!showOrder)}>
      <aside className="MyOrder" onClick={(e) => e.stopPropagation()}>
        <div className="title-container">
          <img
            src={iconArrow}
            alt="arrow"
            onClick={() => setShowOrder(!showOrder)}
          />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content">
          {state.cart.map((datos, index) => (
            <OrderItem datos={datos} key={datos.id + index} />
          ))}
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <Link
            to="/checkout"
            onClick={() => setShowOrder(!showOrder)}
            style={{ color: "white" }}
          >
            <button className="primary-button">Checkout</button>
          </Link>
        </div>
      </aside>
    </section>
  );
};

export default MyOrder;
