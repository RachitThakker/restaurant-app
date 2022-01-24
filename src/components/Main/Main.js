import "./Main.css";
import Menu from "./Menu";
import Cart from "./Cart";

const Main = () => {
  let items;

  const updatedItemsHandler = (updatedItems) => {
    // console.log("From Main.js");
    // console.log(updatedItems);
    items = updatedItems;
  };

  return (
    <div className="main-div">
      <Menu passUp={updatedItemsHandler} />
      <Cart id="cart-link" newItems={items} />
    </div>
  );
};

export default Main;
