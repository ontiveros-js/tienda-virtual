import React from "react";
import ProductItem from "../components/ProductItem";
import useAxios from "../hooks/useAxios";
import "../styles/ProductList.scss";

const URL = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const productos = useAxios(URL);

  return (
    <section className="main-container">
      <div className="ProductList">
        {productos.map((el) => (
          <ProductItem key={el.id} datos={el} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
