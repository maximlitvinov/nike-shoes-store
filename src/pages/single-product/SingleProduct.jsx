import React from "react";
import FullCard from "../../components/fullCard/FullCard";


const SingleProduct = () => {

  const product = [
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
    }
  ];

  return (
  
   <>
    {product.map((element, id)=>(
<FullCard key={id} brand ={element.brand} model={element.model} img={element.img} price={element.price} size={element.size}/>  
    ))}
   </>
    
  );
};

export default SingleProduct;
