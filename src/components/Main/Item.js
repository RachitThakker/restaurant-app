import { useState, useEffect, useContext } from "react";
import "./Item.css";
import CartContext from "../../store/cart-context";

let cartItems = [];

const Item = (props) => {
  const [itemQuantity, setItemQuantity] = useState({
    id: props.itemInfo.id,
    itemName: props.itemInfo.dishName,
    itemPrice: Number(props.itemInfo.price),
    quantity: "0",
  });
  const cartCtx = useContext(CartContext);

  const quantityHandler = (event) => {
    setItemQuantity((prevState) => {
      return {
        ...prevState,
        quantity: +event.target.value,
      };
    });
  };

  useEffect(() => {
    if (itemQuantity.quantity !== "0") {
      let resultObj = cartItems.find(
        (itemObj) => itemObj.itemName === itemQuantity.itemName
      );
      if (resultObj) {
        resultObj.quantity = itemQuantity.quantity;
      } else {
        cartItems.push(itemQuantity);
      }
    }

    let cartItems2 = cartItems.filter((el) => {
      return el.quantity !== 0;
    });

    // console.log(cartItems2);
    cartCtx.assignItemsArray(cartItems2);
  }, [itemQuantity]);

  return (
    <div className="item-container">
      <div className="item-text-div">
        <h3 className="item-name">{props.itemInfo.dishName}</h3>
        <p className="item-description">{props.itemInfo.ingredients}</p>
        <h4 className="item-price">Rs. {props.itemInfo.price}</h4>
        <input
          className="item-quantity"
          type="number"
          min="0"
          max="10"
          step="1"
          // value={
          //   cartItems.find(
          //     (itemObj) => itemObj.itemName === props.itemInfo.dishName
          //   )
          //     ? cartItems.find(
          //         (itemObj) => itemObj.itemName === props.itemInfo.dishName
          //       ).quantity
          //     : ""
          // }
          onChange={quantityHandler}
        />
      </div>
      <div className="item-image-div">
        <img
          className="item-image"
          src={props.itemInfo.imgUrl}
          alt={props.itemInfo.dishName}
        />
      </div>
    </div>
  );
};

export default Item;
