import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import AppContext from "../context/AppContex";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { setShowHeader, showHeader } = useContext(AppContext);

  let ruta = useLocation();

  useEffect(() => {
    if (ruta.pathname === "/") setShowHeader(false);
    else setShowHeader(true);
  });

  return (
    <div className="Layout">
      {showHeader && <Header />}
      {children}
    </div>
  );
};

export default Layout;
