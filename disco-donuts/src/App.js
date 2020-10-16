import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { baseURL } from "./Constants";
import axios from "axios";
import Home from "./Home";
import Order from "./Order";
import Footer from "./Footer";
import "./Style.css";

function App() {
  const [menu, setMenu] = useState([]);
  const [fetchData, setFetchData] = useState(false);

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
  }, [fetchData]);

  return (
    <>
      <div className="App">
        <nav>
          <Link to="/">Menu</Link>
          <Link to="/order">Order Now</Link>
        </nav>
        <main>
          <Route exact path="/">
            <Home menu={menu} />
          </Route>
          <Route exact path="/order">
            {/* Pass menu props to order */}
            <Order
              fetchData={fetchData}
              setFetchData={setFetchData}
              pastries={menu.slice(7)}
              drinks={menu.slice(0, 6)}
            />
          </Route>
        </main>
      </div>
      <div className="layout">
        {/* <header>Header</header>
        <nav>Nav</nav>
        <footer>Footer</footer>
        <section>Menu</section>
        <article>Receipt</article> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
