import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { baseURL } from "./Constants";
import axios from "axios";
import Home from "./Home";
import Order from "./Order";
import Menu from "./Menu";
import Total from "./Total";
import "./Style.css";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      const airtableURL = `${baseURL}`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setMenu(response.data.records);
    };
    getMenu();
  }, []);

  // setDrinks(() => );
  // console.log(pastries);
  // console.log(menu);

  return (
    <>
      <div className="App">
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
        <Menu products={menu} />
      </div>
    </>
  );
}

export default App;
