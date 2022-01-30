import { useReducer, useEffect } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.items.totalAmount + action.item.price * action.item.quantity;

    // console.log(updatedItems);
    // console.log("Total: ", updatedTotalAmount);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "UPDATE") {
    let updatedItems = [...state.items];
    let updatedTotalAmount = 0;

    for (const item of updatedItems) {
      if (item.itemName === action.itemName) {
        item.quantity = action.newQuantity;
      }

      updatedTotalAmount = updatedTotalAmount + item.quantity * item.price;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "ASSIGN") {
    let updatedTotalAmount = 0;
    let newItems = action.items;

    for (const item of newItems) {
      updatedTotalAmount = updatedTotalAmount + item.quantity * item.itemPrice;
    }

    // console.log(newItems);
    // console.log("Total: ", updatedTotalAmount);

    return {
      items: newItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const updateQuantityOfItem = (itemName, newQuantity) => {
    dispatchCartAction({
      type: "UPDATE",
      newQuantity: newQuantity,
      itemName: itemName,
    });
  };

  const assignItemsArrayToCart = (items) => {
    dispatchCartAction({ type: "ASSIGN", items: items });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateQuantity: updateQuantityOfItem,
    assignItemsArray: assignItemsArrayToCart,
  };

  //   useEffect(() => {
  //     console.log(cartContext.items);
  //   }, [cartContext.items]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
