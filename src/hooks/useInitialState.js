import { useState } from "react";

const initialState = {
  cart: [],
};

const defaultInput = {
  email: "",
  password: "",
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [showHeader, setShowHeader] = useState(true);
  const [infoInput, setInfoInput] = useState(defaultInput);
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [toggle, setToggle] = useState(false);

  const addToCart = (payload) => {
    let repeat = state.cart.find((el) => el.id === payload.id);
    console.log(repeat);
    repeat
      ? setState({
          ...state,
          cart: state.cart.map((el) =>
            el.id === repeat.id ? { ...el, quantity: el.quantity + 1 } : el
          ),
        })
      : setState({
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
        });
  };

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart.filter((el) => el.id !== payload.id)],
    });
  };

  return {
    state,
    addToCart,
    removeToCart,
    showHeader,
    setShowHeader,
    infoInput,
    setInfoInput,
    showOrder,
    setShowOrder,
    showMenu,
    setShowMenu,
    toggle,
    setToggle,
  };
};

export default useInitialState;
