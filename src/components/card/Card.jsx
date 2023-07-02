import React from "react";

import style from "./Card.module.scss";


const Card = ({brand, model, price, size, img}) => {
  return (
      <div className={style.text}>
      <img  className={style.img}src={img} alt={model} />
        <p className={style.brand}>{brand}</p>
        <p className={style.model}>{model}</p>
        <p className={style.price}>{price}</p>
        <p className={style.size}>Sizes: {size}</p>
      </div>
  );
};

export default Card;
