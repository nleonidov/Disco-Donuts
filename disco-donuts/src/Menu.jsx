import React, { useState } from "react";

function Menu(props) {
  const [drinks, setDrinks] = useState([]);
  const [pastries, setPastries] = useState([]);
  const [name, setName] = useState("");

  return (
    <div>
      {props.products.map((product) => (
        <div className="menuItems" key={product.id}>
          <h4>{product.fields.productTypes}</h4>
          <h4>{product.fields.product}</h4>
          <h4>{product.fields.price}</h4>
          <h4>{product.fields.prepTime}</h4>
        </div>
      ))}
    </div>
  );
}

export default Menu;
