import "./Menu.css";
import ItemGroup from "./ItemGroup";

const Menu = (props) => {
  const groupedItems = ["Pizza", "Pasta", "Sandwich"];

  const itemsHandler = (itemsArray) => {
    // console.log("From Menu.js: ");
    // console.log(itemsArray);
    props.passUp(itemsArray);
  };

  return (
    <div className="menu-outer">
      <div className="menu-heading" id="menu-link">
        <h2>Menu</h2>
      </div>
      {groupedItems.map((group) => (
        <ItemGroup groupName={group} passUp={itemsHandler} />
      ))}
    </div>
  );
};

export default Menu;
