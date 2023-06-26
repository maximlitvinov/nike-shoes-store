import React from "react";
import style from "./Home.module.scss";
import shoes from "../../assets/img/main-shoes.png";
import circle from '../../assets/img/circle.png'

const Home = () => {
  return (
    <div className={style.container}>
      <span className={style.text}>Air Max</span>
      <img className={style.circle}src={circle} alt="" />
      <img src={shoes} alt="nike air max" />
      <button>Buy Now</button>
    </div>
  );
};

export default Home;
