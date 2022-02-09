import React, { useContext, useState } from "react";
import AppContext from "../context/AppContex";
import "../styles/ProductItem.scss";
import iconAddCart from "../assets/icons/bt_add_to_cart.svg";
import ModalItem from "./ModalItem";

const ProductItem = ({ datos }) => {
  const { addToCart, setShowMenu, setToggle } = useContext(AppContext);
  const [showSlice, setShowSlice] = useState(false);

  const handleClickImg = () => {
    setShowSlice(true);
    setShowMenu(false);
    setToggle(true);
  };

  return (
    <>
      {showSlice && (
        <ModalItem
          datos={datos}
          setShowSlice={setShowSlice}
          setToggle={setToggle}
        />
      )}
      <div className="ProductItem">
        <img
          src={datos.category.image}
          alt={datos.title}
          onClick={handleClickImg}
        />
        <div className="product-info">
          <div>
            <p>${datos.price}</p>
            <p>{datos.title}</p>
          </div>
          <figure onClick={() => addToCart(datos)}>
            <img src={iconAddCart} alt="icono de compra" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
