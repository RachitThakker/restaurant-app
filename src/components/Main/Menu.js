import "./Menu.css";
import ItemGroup from "./ItemGroup";

const Menu = (props) => {
  const groupedItems = ["Pizza", "Pasta", "Sandwich"];

  return (
    <div className="menu-outer">
      <div className="menu-heading">
        <h2>Menu</h2>
      </div>
      {groupedItems.map((group) => (
        <ItemGroup groupName={group} />
      ))}
    </div>
  );
};

export default Menu;
