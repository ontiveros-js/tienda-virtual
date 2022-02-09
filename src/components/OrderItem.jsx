import React, { useContext } from "react";
import AppContext from "../context/AppContex";
import "../styles/OrderItem.scss";
import iconClose from "../assets/icons/icon_close.png";

const OrderItem = ({ datos }) => {
  const { removeToCart } = useContext(AppContext);

  const handlerClick = (product) => {
    removeToCart(product);
  };
  console.log(datos);
  return (
    <div className="OrderItem">
      <figure>
        <img src={datos.category.image} alt={datos.title} />
      </figure>
      <div>
        <p>{datos.title}</p>
        <p>
          ${datos.price} x {datos.quantity} = ${datos.price * datos.quantity}
        </p>
      </div>
      <img src={iconClose} alt="close" onClick={() => handlerClick(datos)} />
    </div>
  );
};

export default OrderItem;
