import Axios from "axios";
import React, { useState } from "react";
import Receipt from "./Receipt";

function Order(props) {
  const [orderName, setOrderName] = useState("");
  const [drink, setDrink] = useState("");
  const [pastry, setPastry] = useState("");
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  // call useEffect inside the uE, call on props.menu to filter by food or drink
  // setter and getter, map select box values.
  const addTotal = (a, b) => {
    let x = props.pastries.find(
      (pastryName) =>
        `${pastryName.fields.productTypes} ${pastryName.fields.product}` ===
        pastry
    );
    let y = props.drinks.find(
      (drinkName) =>
        `${drinkName.fields.productTypes} ${drinkName.fields.product}` === drink
    );
    setTotal(x.fields.price + y.fields.price);
    return x.fields.price + y.fields.price;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      orderName,
      drink,
      pastry,
      total: addTotal(drink, pastry),
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/orders/`;
    await Axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setOrder(fields);
    props.setFetchData(!props.fetchData);
    setOrderName("");
    setDrink("");
    setPastry("");
    setTotal("");
    setIsClicked(true);
  };
  return (
    <>
      <h2>Customize your order!</h2>
      <div className="order-container">
        <form onSubmit={handleSubmit}>
          <select
            onChange={(e) => {
              setDrink(e.target.value);
            }}
            value={drink}
            id="drinks"
          >
            <option>Choose your drink!</option>
            {props.drinks.map((item) => (
              <option>
                {item.fields.productTypes} {item.fields.product}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => {
              setPastry(e.target.value);
            }}
            id="pastries"
            value={pastry}
          >
            <option>Choose your pastry!</option>
            {props.pastries.map((item) => (
              <option>
                {item.fields.productTypes} {item.fields.product}
              </option>
            ))}
          </select>

          <label htmlFor="name">Order Name: </label>
          <input
            name="name"
            type="text"
            value={orderName}
            onChange={(e) => setOrderName(e.target.value)}
          />
          <button type="submit">Submit your order</button>
        </form>
      </div>
      <Receipt
        click={isClicked}
        name={order.orderName}
        pastry={order.pastry}
        drink={order.drink}
        total={order.total}
      />
    </>
  );
}

export default Order;
