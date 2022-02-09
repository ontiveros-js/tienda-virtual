import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (URL) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {

      const efecto = async () => {
      const response = await axios(URL);
      setProductos(response.data);
    };

    efecto();

  }, []);

  return productos;
};

export default useAxios;
