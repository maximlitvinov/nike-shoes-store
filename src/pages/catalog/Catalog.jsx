import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import style from "./Catalog.module.scss";

const Catalog = () => {

  const shoes = [
    {
      id: 1,
      brand: 'Adidas',
      model: 'Adidas Originals Kiellor',
      price: '295$',
      size: '8 - 10',
      img: 'https://i.postimg.cc/Qd72Qx8F/adidas-Originals-Kiellor-W.jpg'
    },
    {
      id: 2,
      brand: 'New Balance',
      model: 'New Balance Epictrha',
      price: '255$',
      size: '8 - 10',
      img: 'https://i.postimg.cc/dQSpgTD7/New-Balance-Epictrha.jpg'
    },
    {
      id: 3,
      brand: 'Nike',
      model: 'Nike Air Force 1 LX',
      price: '230$',
      size: '8 - 10',
      img: 'https://i.postimg.cc/jdD0j4BQ/Nike-Air-Force-1-07-LX.jpg'
    },
    {
      id: 4,
      brand: 'Nike',
      model: 'Nike Air Jordan 1',
      price: '275$',
      size: '8 - 10',
      img: 'https://i.postimg.cc/kGZHSLLN/Nike-air-jordan-1.jpg'
    },
  ]

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
          <h3 className={style.title}>Catalog</h3>
        <div className={style.button_block}>
          <button className={style.filter}>Filters</button>
          <button className={style.sort}>Sort by</button>
        </div>
       
      </div>
      <div className={style.products}>
          {shoes.map((element, index)=>(
           <Link to={`/product`}><Card key={index} brand={element.brand} model={element.model} price={element.price} size={element.size} img={element.img}/></Link> 
          ))}
        </div>
    </div>
  );
};

export default Catalog;
