import React from 'react';

import style from "./FullCard.module.scss";

const FullCard = (product) => {

  return (
    <>
        <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.product__block}>
          <img
            className={style.product__img}
            src={product.img}
            alt={product.model}
            width={400}
          />
          <div className={style.product__characteristics}>
            <div>
              <p>
                <span>Brand:</span>{product.brand}
              </p>
              <p>
                <span>Model:</span> {product.model}
              </p>
              <p>
                <span>Price:</span> {product.price}
              </p>
              <p>
                <span>Size:</span> {product.size} US
              </p>
            </div>
            <div className={style.product__button}>
              <button>Buy now</button>
            </div>
          </div>
        </div>
        <div className={style.product__info}>
          <h4 className={style.title}>Description</h4>
          <p className={style.product__text}>
            <strong>Adidas Originals Kiellor</strong> lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati doloribus aliquid qui
            dolores, aspernatur molestiae facere cumque. Neque doloremque
            dignissimos molestiae commodi possimus aliquid repellendus fuga
            dolore et tenetur ratione natus consectetur explicabo reiciendis,
            vero, sapiente quisquam rem, animi optio tempore sunt quas maxime.
            Sint quibusdam aliquam dolorem error sapiente.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default FullCard