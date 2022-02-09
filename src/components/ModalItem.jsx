import React from "react";
import "../styles/ModalItem.scss";
import Loader from "./Loader";

const ModalItem = ({ setShowSlice, datos, setToggle }) => {
  const handleClickDiv = () => {
    setShowSlice(false);
    setToggle(false);
  };

  return (
    <div className="modal" onClick={handleClickDiv}>
      <ul className="slider">
        <li id="img1">
          <img src={datos.images[0]} alt="imagen 1" onClick={(e) => e.stopPropagation()} />
        </li>
        <li id="img2">
          <img src={datos.images[1]} alt="imagen 2" onClick={(e) => e.stopPropagation()} />
        </li>
        <li id="img3">
          <img src={datos.images[2]} alt="imagen 3" onClick={(e) => e.stopPropagation()} />
        </li>
        <Loader />
      </ul>
      <ul className="control">
        <a
          className="control-a"
          href="#img1"
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <span>1</span>
          </li>
        </a>
        <a
          className="control-a"
          href="#img2"
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <span>2</span>
          </li>
        </a>
        <a
          className="control-a"
          href="#img3"
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <span>3</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default ModalItem;
