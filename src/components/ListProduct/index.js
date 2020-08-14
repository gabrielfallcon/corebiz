import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import { List } from './styles';

const ListProduct = ({ data }) => {
  const breakPoints = [
    {
      width: 350,
      itemsToShow: 2,
    },
    {
      width: 768,
      itemsToShow: 4,
      dots: false,
    },
  ]

  return (
    <List>
      <Carousel
        breakPoints={breakPoints}
      >

        {data.map(item => {
          return (
            <li key={item.productId}>

              {/* Mostrar faixa vermelha apenas se houver promoção  */}
              {item.listPrice && (
                <>
                  <span>Off</span>
                  <div className="promotion" />
                </>
              )}

              <img
                src={item.imageUrl}
                alt="Product"
              />

              <div className="product-description">
                <h2>{item.productName}</h2>

                <div className="block-star">
                  <div className="star one"></div>
                  <div className="star two"></div>
                  <div className="star thre"></div>
                  <div className="star for"></div>
                  <div className="star five"></div>
                </div>

                <div className="price">

                  <span>
                    {item.listPrice && `de R$ ${item.listPrice}`}
                  </span>

                  <h1>por <span>R$ {item.price}</span></h1>

                  {item.installments.map(installment => (
                    <span>
                      ou em {installment.quantity}x
                      de R$ {installment.value}
                    </span>
                  ))}

                  <div className="buy-button">
                    <button>Comprar</button>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </Carousel>
    </List>
  );
}

export default ListProduct;