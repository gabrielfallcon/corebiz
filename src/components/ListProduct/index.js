import React, { useState, useEffect } from 'react';
import { FaStar,  FaRegStar } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import transformValuePrice from '../../utils/transformValuePrice';

import { List } from './styles';

const ListProduct = ({ data, buyAction }) => {
  const [rating, setRating] = useState(null);

  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
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
          const listPriceTransformed = transformValuePrice(item.listPrice)
          const priceTransformed = transformValuePrice(item.price)

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
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1

                    return(
                      <>  
                        {ratingValue <= item.stars 
                          ? 
                            <FaStar 
                              size={18}
                              color="F8475F"
                            />

                          : 
                            <FaRegStar
                              size={18}
                              color="F8475F"
                            />
                        }
                      </>
                    )
                  })}
                </div>

                <div className="price">
                  <span>
                    {item.listPrice && `de R$ ${listPriceTransformed}`}
                  </span>

                  <h1>por <span>R$ {priceTransformed}</span></h1>

                  {item.installments.map(installment => {
                    const installmentTransformed = transformValuePrice(installment.value)

                    return (
                      <span>
                        ou em {installment.quantity}x
                        de R$ {installmentTransformed}
                      </span>
                    )
                  })}

                  <div className="buy-button">
                    <button onClick={buyAction}>
                      Comprar
                    </button>
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