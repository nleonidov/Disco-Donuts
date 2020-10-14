import React, { useState } from "react";

function Menu(props) {
  const [drinks, setDrinks] = useState([]);
  const [pastries, setPastries] = useState([]);
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <select name="product-type" id="drinks">
          <option value="">Choose your drink!</option>
        </select>
      </form>
      <form>
        <select name="product-type" id="pastries">
          <option value="">Choose your pastry!</option>
        </select>
      </form>
      <label htmlFor="name">Order Name: </label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit your order</button>

      {props.products.map((product) => (
        <div key={product.id}>
          <h3>{product.fields.productTypes}</h3>
          <h4>{product.fields.product}</h4>
          <h5>{product.fields.price}</h5>
          <h6>{product.fields.prepTime}</h6>
        </div>
      ))}
    </div>
  );
}

export default Menu;
