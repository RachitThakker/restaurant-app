import { useState, useContext, useEffect } from "react";
import "./Cart.css";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      setIsEmpty(true);
    }
    if (cartCtx.items.length > 0) {
      setIsEmpty(false);
    }

    console.log("From Cart.js");
    console.log(cartCtx);
  }, [cartCtx.items]);

  if (isEmpty) {
    return (
      <div className="outer-cart" id="cart-link">
        <div className="inner-cart">
          <h2>Cart</h2>
          <p className="cart-text">Your cart is empty.</p>
        </div>
      </div>
    );
  }

  if (!isEmpty) {
    return (
      <div className="outer-cart" id="cart-link">
        <div className="inner-cart">
          <h2>Cart</h2>

          {cartCtx.items.map((itemObj) => {
            return (
              <div key={itemObj.itemName} className="cart-item-div">
                <p className="cart-text">{itemObj.itemName}</p>
                <p className="cart-text">x{itemObj.quantity}</p>
              </div>
            );
          })}
          <p className="cart-text">Rs. {cartCtx.totalAmount}/-</p>
        </div>
      </div>
    );
  }
};

export default Cart;
