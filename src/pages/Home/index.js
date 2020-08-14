import React from 'react';

import Header from '../../components/Header';
import ListProduct from '../../components/ListProduct';

import { 
  Container,
  Banner,
  ProductsBuy,
  NewsLetter
} from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      
      <Banner>
        <img 
          src="https://media-exp1.licdn.com/dms/image/C4D1BAQEw6o09H5bSTw/company-background_10000/0?e=2159024400&v=beta&t=JyIJ_VNNz9pZTzqJB-q23m5435kTys8D9rkESFwSh_s" 
          alt="Corebiz e-commerce"
        />
      </Banner>

      <ProductsBuy>
        <h1>Mais Vendidos</h1>

        <ListProduct />
      </ProductsBuy>

      <NewsLetter>
        <h1>
          Participe de nossas news com promoção
          e novidades!
        </h1>

        <form>
          <input 
            type="text"
            placeholder="Digite seu nome"
          />
          <input  
            type="text"
            placeholder="Digite seu email"
          />
          <button type="submit">Eu quero!</button>
        </form>
      </NewsLetter>

    </Container>
  );
}

export default Home;