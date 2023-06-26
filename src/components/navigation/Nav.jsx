import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <ul className={style.navigation}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/catalog">
            <li>All Shoes</li>
          </Link>
          <Link to="/footwear">
            <li>FootWear</li>
          </Link>
          <Link to="/basketball">
            <li>Basketball</li>
          </Link>
        </ul>
        <button className={style.search}>🔍︎ Search</button>
      </div>
    </div>
  );
};

export default Nav;
