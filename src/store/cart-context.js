import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  updateQuantity: (itemName, newQuantity) => {},
  assignItemsArray: (items) => {},
});

export default CartContext;
