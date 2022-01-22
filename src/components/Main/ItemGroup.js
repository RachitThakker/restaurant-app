import { useState } from "react";
import "./ItemGroup.css";
import Item from "./Item";

const ItemGroup = (props) => {
  let items;
  if (props.groupName === "Pizza") {
    items = [
      {
        id: Math.random.toString(),
        dishName: "Margharita",
        ingredients: "Just cheese. Laziest pizza ever.",
        price: "89",
        imgUrl: "",
        quantity: "0",
      },
      {
        id: Math.random.toString(),
        dishName: "Mexican Loaded",
        ingredients: "Jalapenos, Corn, Onion, Olives, Spicy Sauce.",
        price: "129",
        imgUrl: "",
        quantity: "0",
      },
      {
        id: Math.random.toString(),
        dishName: "Pineapple Pizza",
        ingredients: "Really? No, Really?",
        price: "999",
        imgUrl: "",
        quantity: "0",
      },
    ];
  }

  if (props.groupName === "Pasta") {
    items = [
      {
        id: Math.random.toString(),
        dishName: "Alfredo Pasta",
        ingredients: "White Sauce, Bell Pepper, Capsicum, Jalapenos",
        price: "119",
        imgUrl: "",
        quantity: "0",
      },
      {
        id: Math.random.toString(),
        dishName: "Tomato Pasta",
        ingredients: "Light Tomato Sauce, Onion, Corn, Olives",
        price: "109",
        imgUrl: "",
        quantity: "0",
      },
      {
        id: Math.random.toString(),
        dishName: "Chef's Special Pasta",
        ingredients: "According to chef's mood which isn't always good.",
        price: "149",
        imgUrl: "",
        quantity: "0",
      },
    ];
  }

  if (props.groupName === "Sandwich") {
    items = [
      {
        id: Math.random.toString(),
        dishName: "Sweet Panini",
        ingredients: "Cabbage, Capsicum, Pineapple, Mayonaisse",
        price: "99",
        imgUrl: "",
        quantity: "0",
      },
      {
        id: Math.random.toString(),
        dishName: "Aloo Tikki",
        ingredients: "Aloo Patty, Lettuce, Cabbage, Capsicum, Orange Sauce",
        price: "109",
        imgUrl: "",
        quantity: "0",
      },
      {
        id: Math.random.toString(),
        dishName: "Paneer Love",
        ingredients: "Paneer Tikka, Lettuce, Tomatoes, Orange Sauce",
        price: "119",
        imgUrl: "",
        quantity: "0",
      },
    ];
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = () => {
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  };

  if (!isExpanded) {
    return (
      <div>
        {!isExpanded && (
        <div className="groupItem-div__closed">
          <div className="groupItem-div__closed__content">
            <h3>{props.groupName}</h3>
            <button className="button-expand" onClick={expandHandler}>
              Show Items
            </button>
          </div>
        </div>
      )}
      </div>
    )
  }

  if (isExpanded) {
    return (
      <div>
        {isExpanded &&
        (items.forEach((item) => <Item itemInfo={item} onCollapse={expandHandler} /> ))}
      </div>
    )
  }

  /*return (
    <div>
      {!isExpanded && (
        <div className="groupItem-div__closed">
          <div className="groupItem-div__closed__content">
            <h3>{props.groupName}</h3>
            <button className="button-expand" onClick={expandHandler}>
              Show Items
            </button>
          </div>
        </div>
      )}

      {isExpanded &&
        (items.forEach((item) => {
          <Item itemInfo={item} onCollapse={expandHandler} />;
        }))}
    </div>
  );*/
};

export default ItemGroup;
