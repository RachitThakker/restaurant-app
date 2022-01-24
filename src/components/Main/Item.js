import { useState } from "react";
import "./Item.css";

const Item = (props) => {
  const [itemQuantity, setItemQuantity] = useState("0");

  const quantityHandler = (event) => {
    setItemQuantity(event.target.value);
    props.itemInfo.quantity = +event.target.value;
    // console.log("From Item.js");
    // console.log(props.itemInfo);
    props.passUp(props.itemInfo);
  };

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
