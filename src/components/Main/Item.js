import { useState } from "react";
import "./Item.css";

const Item = (props) => {
  const [itemQuantity, setItemQuantity] = useState("0");
  
  const quantityHandler = event => {
    setItemQuantity(event.target.value);
    props.itemInfo.quantity = +(event.target.value);
    console.log(props.itemInfo);
  }
  
  return <div className="item-container">
    <h4 className="item-name">{props.itemInfo.dishName}</h4>
    <p className="item-description">{props.itemInfo.ingredients}</p>
    <img className="item-image" src={props.itemInfo.imgUrl} alt={props.itemInfo.dishName} />
    <h4 className="item-price">{props.itemInfo.price}</h4>
    <input className="item-quantity" type="number" min="0" max="10" step="1" onChange={quantityHandler} />
  </div>;
};

export default Item;
