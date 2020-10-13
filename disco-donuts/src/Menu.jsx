import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "./Constants";

function Menu(props) {
  const [drinks, setDrinks] = useState([]);
  const [pastries, setPastries] = useState([]);

  return (
    <div>
      <form>
        <select name="product-type" id="choice">
          <option value="">Choose your drink!</option>
        </select>
      </form>
      <form>
        <select name="product-type" id="choice">
          <option value="">Choose your pastry!</option>
        </select>
      </form>

      {props.products.map((product) => (
        <div key={product.id}>
          <h3>{product.fields.product}</h3>
          <h4>{product.fields.productTypes}</h4>
          <h5>{product.fields.price}</h5>
          <h6>{product.fields.prepTime}</h6>
        </div>
      ))}
    </div>
  );
}

export default Menu;
