import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Order from "./Order";
import "./Style.css";

function App() {
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
