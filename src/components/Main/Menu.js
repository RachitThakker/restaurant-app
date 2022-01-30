import "./Menu.css";
import ItemGroup from "./ItemGroup";

const Menu = (props) => {
  const groupedItems = [
    {
      id: Math.random().toString(),
      name: "Pizza",
    },
    {
      id: Math.random().toString(),
      name: "Pasta",
    },
    {
      id: Math.random().toString(),
      name: "Sandwich",
    },
  ];

  const itemsHandler = (cartItems) => {
    props.passUp(cartItems);
  };

  return (
    <div className="menu-outer">
      <div className="menu-heading" id="menu-link">
        <h2>Menu</h2>
      </div>
      {groupedItems.map((group) => (
        <ItemGroup
          key={group.id}
          groupName={group.name}
          passUp={itemsHandler}
        />
      ))}
    </div>
  );
};

export default Menu;
