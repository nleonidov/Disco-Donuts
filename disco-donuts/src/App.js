import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { baseURL } from "./Constants";
import axios from "axios";
import Home from "./Home";
import Order from "./Order";
import "./Style.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const airtableURL = `${baseURL}`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <nav>
        <Link to="/">Menu</Link>
        <Link to="/order">Order Now</Link>
      </nav>
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
      </main>
    </>
  );
}

export default App;
