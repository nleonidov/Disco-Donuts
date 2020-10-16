import React from "react";

function Menu(props) {
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
