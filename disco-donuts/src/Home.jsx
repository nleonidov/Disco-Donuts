import React from "react";
import Menu from "./Menu";

export default function Home(props) {
  return (
    <>
      <h1>Disco Donuts</h1>
      <h2>Where you can espresso self</h2>
      <Menu products={props.menu} />
    </>
  );
}
