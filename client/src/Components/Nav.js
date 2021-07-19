// importing components
import React from "react";
import { Link } from "react-router-dom";
// Nav component to export
const Nav = () => {
  // making the Navbar links
  return (
    <div id="navBar">
      <Link to="/" class="button">
        <button type="button">Home</button>
      </Link>
      <Link to="/restaurant/halvorsons" class="button">
        <button type="button">Halvorson's</button>
      </Link>
      <Link to="/restaurant/leunigs" class="button">
        <button type="button">Leunig's Bistro</button>
      </Link>
      <Link to="/restaurant/kkds" class="button">
        <button type="button">Kountry Kart Deli</button>
      </Link>
      <Link to="/restaurant/kru" class="button">
        <button type="button">Kru Coffee</button>
      </Link>
      <Link to="/restaurant/cortijo" class="button">
        <button type="button">El Cortijo</button>
      </Link>
      <Link to="/restaurant/penny-cluse" class="button">
        <button type="button">Penny Cluse</button>
      </Link>
      <Link to="/restaurant/farmhouse" class="button">
        <button type="button">Farmhouse</button>
      </Link>
      <Link to="/restaurant/honey-road" class="button">
        <button type="button">Honey Road</button>
      </Link>
    </div>
  );
};

// exporting the Nav component
export default Nav;
