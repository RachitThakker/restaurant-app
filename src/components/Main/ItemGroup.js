import { useState } from "react";
import "./ItemGroup.css";
import Item from "./Item";

const ItemGroup = (props) => {
  let items;
  if (props.groupName === "Pizza") {
    items = [
      {
        id: Math.random().toString(),
        dishName: "Margherita",
        ingredients: "Just cheese. Laziest pizza ever.",
        price: "89",
        // imgUrl: "../../../images/pizza-3000285_640.png",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
      {
        id: Math.random().toString(),
        dishName: "Mexican Loaded",
        ingredients: "Jalapenos, Corn, Onion, Olives, Spicy Sauce.",
        price: "129",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
      {
        id: Math.random().toString(),
        dishName: "Pineapple Pizza",
        ingredients: "Really? No, Really?",
        price: "999",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
    ];
  }

  if (props.groupName === "Pasta") {
    items = [
      {
        id: Math.random().toString(),
        dishName: "Alfredo Pasta",
        ingredients: "White Sauce, Bell Pepper, Capsicum, Jalapenos",
        price: "119",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
      {
        id: Math.random().toString(),
        dishName: "Tomato Pasta",
        ingredients: "Light Tomato Sauce, Onion, Corn, Olives",
        price: "109",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
      {
        id: Math.random().toString(),
        dishName: "Chef's Special Pasta",
        ingredients: "According to chef's mood which isn't always good.",
        price: "149",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
    ];
  }

  if (props.groupName === "Sandwich") {
    items = [
      {
        id: Math.random().toString(),
        dishName: "Sweet Panini",
        ingredients: "Cabbage, Capsicum, Pineapple, Mayonaisse",
        price: "99",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
      {
        id: Math.random().toString(),
        dishName: "Aloo Tikki",
        ingredients: "Aloo Patty, Lettuce, Cabbage, Capsicum, Orange Sauce",
        price: "109",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
      {
        id: Math.random().toString(),
        dishName: "Paneer Love",
        ingredients: "Paneer Tikka, Lettuce, Tomatoes, Orange Sauce",
        price: "119",
        imgUrl:
          "https://github.com/RachitThakker/restaurant-app/blob/main/images/pizza-3000285_640.png",
        quantity: "0",
      },
    ];
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = (event) => {
    //Add two-way binding to input quantity to always display user selected value.
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  };

  const newItemHandler = (newItems) => {
    // console.log("From ItemGroup.js");
    // console.log(newItems);
    props.passUp(newItems);
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
    );
  }

  // if (isExpanded) {
  //   return (
  //     <div>
  //       {isExpanded &&
  //       (items.forEach((item) => <Item itemInfo={item} onCollapse={expandHandler} /> ))}
  //     </div>
  //   )
  // }

  if (isExpanded) {
    return (
      <div className="expanded-outer">
        <div className="button-collapse-div">
          <button className="button-collapse" onClick={expandHandler}>
            Hide {props.groupName} Items
          </button>
        </div>
        {items.map((itemObj) => (
          <Item key={itemObj.id} itemInfo={itemObj} passUp={newItemHandler} />
        ))}
      </div>
    );
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
