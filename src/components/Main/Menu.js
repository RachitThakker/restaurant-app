import "./Menu.css";
import ItemGroup from "./ItemGroup";

const Menu = (props) => {
  const groupedItems = ["Pizza", "Pasta", "Sandwich"];

  return (
    <div className="menu-outer">
      {groupedItems.map((group) => (
        <ItemGroup groupName={group} />
      ))}
    </div>
  );
};

export default Menu;
