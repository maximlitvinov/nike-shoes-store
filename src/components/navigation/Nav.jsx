import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = () => {
  const nav = ["Home", "Catalog", "Footwear", "Basketball"];
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <ul className={style.navigation}>
          {nav.map((element) => (
            <li key={element}>
              <Link to={element.toLocaleLowerCase()}>{element}</Link>
            </li>
          ))}
        </ul>
        <button className={style.search}>🔍︎ Search</button>
      </div>
    </div>
  );
};

export default Nav;
