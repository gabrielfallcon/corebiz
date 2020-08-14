import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Carousel from 'react-elastic-carousel';

import { List } from './styles';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data);

      console.log(response.data);
    });
  },[]);

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
        <li>
          <span>Off</span>
          <div className="promotion">
          </div>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/Tenis_NMD_R1_Preto_B42200_01_standard.jpg"
            alt=""
          />

          <div className="product-description">
            <h2>Sapato Floater Preto</h2>

            <div className="block-star">
              <div className="star one"></div>
              <div className="star two"></div>
              <div className="star thre"></div>
              <div className="star for"></div>
              <div className="star five"></div>
            </div>

            <div className="price">
              <h1>por <span>R$ 259,90</span></h1>

              <span>ou em 9x de R$ 28,87</span>

              <div className="buy-button">
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </li>

        <li>
          <span>Off</span>
          <div className="promotion">
          </div>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/Tenis_NMD_R1_Preto_B42200_01_standard.jpg"
            alt=""
          />

          <div className="product-description">
            <h2>Sapato Floater Preto</h2>

            <div className="block-star">
              <div className="star one"></div>
              <div className="star two"></div>
              <div className="star thre"></div>
              <div className="star for"></div>
              <div className="star five"></div>
            </div>

            <div className="price">
              <h1>por <span>R$ 259,90</span></h1>

              <span>ou em 9x de R$ 28,87</span>

              <div className="buy-button">
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </li>
        
        <li>
          <span>Off</span>
          <div className="promotion">
          </div>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/Tenis_NMD_R1_Preto_B42200_01_standard.jpg"
            alt=""
          />

          <div className="product-description">
            <h2>Sapato Floater Preto</h2>

            <div className="block-star">
              <div className="star one"></div>
              <div className="star two"></div>
              <div className="star thre"></div>
              <div className="star for"></div>
              <div className="star five"></div>
            </div>

            <div className="price">
              <h1>por <span>R$ 259,90</span></h1>

              <span>ou em 9x de R$ 28,87</span>

              <div className="buy-button">
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </li>

        <li>
          <span>Off</span>
          <div className="promotion">
          </div>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/Tenis_NMD_R1_Preto_B42200_01_standard.jpg"
            alt=""
          />

          <div className="product-description">
            <h2>Sapato Floater Preto</h2>

            <div className="block-star">
              <div className="star one"></div>
              <div className="star two"></div>
              <div className="star thre"></div>
              <div className="star for"></div>
              <div className="star five"></div>
            </div>

            <div className="price">
              <h1>por <span>R$ 259,90</span></h1>

              <span>ou em 9x de R$ 28,87</span>

              <div className="buy-button">
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </li>

        <li>
          <span>Off</span>
          <div className="promotion">
          </div>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/Tenis_NMD_R1_Preto_B42200_01_standard.jpg"
            alt=""
          />

          <div className="product-description">
            <h2>Sapato Floater Preto</h2>

            <div className="block-star">
              <div className="star one"></div>
              <div className="star two"></div>
              <div className="star thre"></div>
              <div className="star for"></div>
              <div className="star five"></div>
            </div>

            <div className="price">
              <h1>por <span>R$ 259,90</span></h1>

              <span>ou em 9x de R$ 28,87</span>

              <div className="buy-button">
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </li>
      </Carousel>
    </List>
  );
}

export default ListProduct;