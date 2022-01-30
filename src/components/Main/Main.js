import "./Main.css";
import Menu from "./Menu";
import Cart from "./Cart";
import CartProvider from "../../store/CartProvider";

const Main = () => {
  // let items = [];

  // const updatedItemsHandler = (cartItems) => {
  //   items = cartItems.filter((el) => {
  //     return el.quantity !== "0";
  //   });
  //   console.log("From Main.js");
  //   console.log(items);
  //   items.map((item) => {
  //     return localStorage.setItem(item.itemName, item.quantity);
  //   });
  //   if (items.length === 0) {
  //     localStorage.clear();
  //   }
  //   for (const item of items) {
  //     if (item.quantity === 0 || item.quantity === "0") {
  //       localStorage.removeItem(item.itemName);
  //     }
  //   }
  // };

  return (
    <CartProvider>
      <Menu />
      <Cart />
    </CartProvider>
  );
};

export default Main;
