import React, {useState, useEffect, useCallback, useRef} from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationErrors';

import api from '../../services/api';
import {
  FiMail,
  FiHeadphones
} from 'react-icons/fi';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Header from '../../components/Header';
import ListProduct from '../../components/ListProduct';
import Input from '../../components/Input';

import {
  Container,
  Banner,
  ProductsBuy,
  NewsLetter,
  SendEmailSuccess,
  Footer,
  ToastAddProductCart
} from './styles';

const Home = () => {
  const formRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [isSuccessSendEmail, setIsSuccessSendEmail] = useState(false)
  const [shoppingCart, setShoppingCart] = useState(0);
  const [isClosedToast, setIsClosedToast] = useState(false);


  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data);
    });
    
    setShoppingCart(Number(localStorage.getItem('cart')));
  },[shoppingCart]);
  
  const handleSendMailNewsLetter = useCallback(async(data) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Preencha com seu nome completo'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Preecha com um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await api.post('newsletter', {
        email: data.email,
        name: data.name
      });

      setIsSuccessSendEmail(true)
    } catch (err) {
      const errors = getValidationsErrors(err);

      formRef.current.setErrors(errors);
    }
    
  }, []);

  const newSendEmail = () => {
    setIsSuccessSendEmail(false)
  }

  const buyProduct = () => {
    const total = shoppingCart + 1;

    localStorage.setItem('cart', total);

    setIsClosedToast(true);

    setShoppingCart(total);
  }

  const isShowToast = () => {
    if (isClosedToast === true ) {
      setIsClosedToast(false);
    } else {
      setIsClosedToast(true)
    }
  }

  return (
    <>
      <Container>
        <Header />

        <Banner>
          <Carousel 
            showArrows={false} 
            autoPlay={true} 
            infiniteLoop={true}
            interval={3000}
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D1BAQEw6o09H5bSTw/company-background_10000/0?e=2159024400&v=beta&t=JyIJ_VNNz9pZTzqJB-q23m5435kTys8D9rkESFwSh_s"
                alt="Corebiz e-commerce"
              />
            </div>

            <div>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D1BAQEw6o09H5bSTw/company-background_10000/0?e=2159024400&v=beta&t=JyIJ_VNNz9pZTzqJB-q23m5435kTys8D9rkESFwSh_s"
                alt="Corebiz e-commerce"
              />
            </div>

            <div>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D1BAQEw6o09H5bSTw/company-background_10000/0?e=2159024400&v=beta&t=JyIJ_VNNz9pZTzqJB-q23m5435kTys8D9rkESFwSh_s"
                alt="Corebiz e-commerce"
              />
            </div>
          </Carousel>
        </Banner>

        <ProductsBuy>
          <h1>Mais Vendidos</h1>

          <ListProduct data={products} buyAction={buyProduct}/>
        </ProductsBuy>

        <NewsLetter>
          
          {isSuccessSendEmail === false 
            ?
              <>
                <h1>
                  Participe de nossas news com promoção
                  e novidades!
                </h1>

                <Form ref={formRef} onSubmit={handleSendMailNewsLetter}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                  />
                  <Input
                    type="text"
                    name="email"
                    placeholder="Digite seu email"
                  />
                  <button type="submit">Eu quero!</button>
                </Form>
              </>
            :
              <SendEmailSuccess>
                <h1>Seu e-mail foi cadastrado com sucesso!</h1>

                <span>
                  A partir de agora você receberá as novidades e ofertas exclusivas.
                </span>

                <button
                  onClick={newSendEmail}
                >
                  Cadastrar novo e-mail
                </button>
              </SendEmailSuccess>
          }
            
        </NewsLetter>

        <Footer>
          <div className="content">

            <ul className="footer__andress">
              <h1>Localização</h1>

              <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
              <li>Alphavile SP</li>
              <li>brasil@corebiz.ag</li>
              <li>+55 11 3090 1039</li>
            </ul>

            <div className="footer__buttons">
              <a href="mailto:brasil@corebiz.ag">
                <FiMail size={30} />
                Entre em contato
              </a>

              <a href="tel:551130901039">
                <FiHeadphones size={30} />
                Fale com o nosso <br />
                consultor online
              </a>
            </div>

            <div className="footer__seal">
              <svg width="144" height="36" viewBox="0 0 72 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.8507 17.9565H56.1884V5.44262H58.8507V17.9565Z" fill="white" />
                <path d="M5.77868 8.00846C5.36706 8.00255 4.95883 8.08753 4.58027 8.25793C4.20171 8.42833 3.86122 8.68037 3.58072 8.99783C2.98221 9.65016 2.68296 10.5525 2.68296 11.6941C2.68296 12.8357 2.98221 13.7598 3.59104 14.423C3.87586 14.7443 4.22128 14.9992 4.60513 15.1714C4.98898 15.3437 5.40278 15.4295 5.81996 15.4233C6.60421 15.4233 7.23367 15.195 7.70835 14.7492C8.14965 14.3438 8.47485 13.8166 8.64739 13.2271L11.0001 14.1295C10.6906 15.1841 10.0921 16.0974 9.20462 16.8584C8.31718 17.6195 7.1924 18 5.81996 18C4.16891 18 2.78615 17.402 1.67169 16.1952C0.55723 14.9884 0 13.488 0 11.6941C0 9.87847 0.546911 8.37811 1.65105 7.19304C2.75519 6.00797 4.11731 5.41 5.75805 5.41C7.16144 5.41 8.30686 5.79053 9.1943 6.55158C10.0357 7.24827 10.6403 8.2133 10.9176 9.30225L8.51324 10.2264C8.36888 9.62441 8.06037 9.08015 7.6258 8.66079C7.17279 8.2259 6.56396 8.00846 5.77868 8.00846Z" fill="white" />
                <path d="M15.4177 14.3904C15.7144 14.7067 16.0675 14.958 16.4568 15.1299C16.846 15.3017 17.2637 15.3907 17.6858 15.3917C18.1078 15.3927 18.5259 15.3057 18.9159 15.1358C19.3059 14.9658 19.6601 14.7162 19.9581 14.4013C20.5773 13.7381 20.8868 12.8248 20.8868 11.6398C20.8868 10.4764 20.5773 9.57405 19.9581 8.92172C19.3524 8.29464 18.5371 7.94327 17.6879 7.94327C16.8387 7.94327 16.0235 8.29464 15.4177 8.92172C14.7986 9.57405 14.489 10.4764 14.489 11.6398C14.489 12.8031 14.7986 13.7272 15.4177 14.3904ZM17.6879 5.41C19.4112 5.41 20.8353 5.9971 21.9497 7.1713C23.0642 8.34549 23.6317 9.83499 23.6317 11.6506C23.6317 13.4663 23.0745 14.9558 21.9497 16.1409C20.8249 17.3259 19.4112 17.913 17.6879 17.913C15.9853 17.913 14.5716 17.3259 13.4468 16.1409C12.322 14.9558 11.7648 13.4554 11.7648 11.6506C11.7648 9.84586 12.322 8.35637 13.4468 7.1713C14.5716 5.98623 15.975 5.41 17.6879 5.41Z" fill="white" />
                <path d="M30.5765 5.48611V8.34549C30.2861 8.29856 29.993 8.27313 29.6993 8.26939C27.6768 8.26939 26.6758 9.31312 26.6758 11.6289V17.913H23.9929V5.44262H26.6036V7.4431C26.8603 6.81344 27.3062 6.29009 27.8729 5.95361C28.4772 5.58429 29.1659 5.3963 29.8644 5.41C30.1037 5.40784 30.3425 5.43336 30.5765 5.48611Z" fill="white" />
                <path d="M34.2397 10.3677H40.2145C40.205 10.0159 40.1278 9.66968 39.9877 9.35013C39.8476 9.03057 39.6474 8.74428 39.3993 8.50858C38.8936 8.00846 38.161 7.7584 37.2116 7.7584C36.3448 7.7584 35.6431 8.01933 35.1169 8.54119C34.5906 9.06306 34.2913 9.67625 34.2397 10.3677ZM40.5344 13.4337L42.98 14.1839C42.6291 15.2602 41.979 16.1517 41.0194 16.8584C40.0597 17.5651 38.8833 17.913 37.4799 17.913C35.7463 17.913 34.281 17.3368 33.0737 16.1952C31.8663 15.0536 31.2575 13.5207 31.2575 11.5963C31.2575 9.7915 31.8457 8.30201 33.0221 7.14956C34.1373 6.01616 35.6313 5.3912 37.1807 5.41C39.0484 5.41 40.5034 5.96449 41.556 7.06258C42.6085 8.16067 43.1337 9.65016 43.1337 11.5245C43.1337 12.0246 43.1131 12.3182 43.0615 12.416H34.1665C34.1776 12.8367 34.2735 13.2501 34.4479 13.6287C34.6222 14.0074 34.871 14.3426 35.1777 14.6122C35.8204 15.1919 36.6434 15.5016 37.4892 15.482C39.0484 15.4885 40.07 14.8036 40.5344 13.4337Z" fill="white" />
                <path d="M46.4266 17.9565H43.7023V0H46.4472V7.23001C46.7361 6.72989 47.2108 6.30587 47.8712 5.96883C48.5804 5.61625 49.3574 5.44136 50.1414 5.45784C51.8441 5.45784 53.1752 6.03407 54.1349 7.19739C55.0946 8.36071 55.5693 9.83933 55.5693 11.6441C55.5693 13.4815 55.0636 14.9819 54.0627 16.1669C53.0617 17.352 51.7202 17.9282 50.0486 17.9282C48.3769 17.9282 47.1695 17.3085 46.4266 16.0582V17.9565ZM51.8647 14.4013C52.4529 13.7272 52.7418 12.814 52.7418 11.6615C52.7418 10.5091 52.4529 9.60667 51.875 8.94346C51.2972 8.28026 50.5336 7.95409 49.5842 7.95409C48.6658 7.95409 47.9125 8.28026 47.314 8.94346C46.7155 9.60667 46.4266 10.5091 46.4266 11.6615C46.4266 12.814 46.7258 13.7055 47.314 14.3904C47.9022 15.0754 48.6658 15.4124 49.5842 15.4124C50.5232 15.4124 51.2765 15.0754 51.8647 14.4013Z" fill="white" />
                <path d="M71.44 17.9456H59.6969V15.4885L67.1163 7.92148H59.5731V5.44262H71.4194V7.82798L63.9071 15.4603H71.44V17.95V17.9456Z" fill="white" />
              </svg>


              <svg width="98" height="34" viewBox="0 0 49 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.8284 6.36509H33.1109V12.1713C33.1109 12.28 33.0164 12.3731 32.9061 12.3731H31.5825C31.4722 12.3731 31.3776 12.28 31.3776 12.1713V6.36509H29.6444C29.5971 6.36509 29.5341 6.34957 29.5026 6.31852C29.471 6.28747 29.4395 6.24089 29.4395 6.1788V5.15417C29.4395 5.1076 29.4553 5.0455 29.5026 5.01445C29.5341 4.9834 29.5971 4.95235 29.6444 4.96788H34.8284C34.9387 4.96788 35.0333 5.0455 35.0333 5.15417V6.1788C35.0333 6.28747 34.9387 6.36509 34.8284 6.36509Z" fill="white" />
                <path d="M40.3434 12.3266C39.6658 12.4197 38.9725 12.4663 38.295 12.4508C36.9871 12.4508 35.8369 12.1247 35.8369 10.3084V7.00161C35.8369 5.18523 37.0029 4.87474 38.3107 4.87474C38.9883 4.85921 39.6658 4.90579 40.3434 4.99894C40.4852 5.01446 40.5482 5.07656 40.5482 5.20076V6.13223C40.5482 6.2409 40.4537 6.33405 40.3434 6.33405H38.2162C37.7435 6.33405 37.5701 6.4893 37.5701 7.01714V7.91756H40.2646C40.3749 7.91756 40.4694 8.01071 40.4694 8.11938V9.06639C40.4694 9.17506 40.3749 9.26821 40.2646 9.26821H37.5701V10.3239C37.5701 10.8362 37.7435 11.007 38.2162 11.007H40.3434C40.4537 11.007 40.5482 11.1001 40.5482 11.2088V12.1403C40.5482 12.2489 40.4852 12.311 40.3434 12.3266Z" fill="white" />
                <path d="M47.9697 12.3731H46.3625C46.2522 12.3887 46.1419 12.3266 46.0947 12.2179L44.6923 10.0444L43.4317 12.1713C43.3687 12.2955 43.2899 12.3731 43.1796 12.3731H41.6827C41.6512 12.3731 41.6039 12.3731 41.5724 12.3421C41.5409 12.311 41.5251 12.28 41.5251 12.2334C41.5251 12.2024 41.5409 12.1868 41.5409 12.1713L43.7311 8.5696L41.5094 5.15418C41.4936 5.13866 41.4936 5.10761 41.4936 5.09208C41.4936 5.01446 41.5724 4.95236 41.6512 4.96789H43.3057C43.416 4.96789 43.4948 5.06103 43.5578 5.15418L44.8499 7.17238L46.1104 5.15418C46.1577 5.04551 46.2522 4.98341 46.3625 4.96789H47.8594C47.9382 4.96789 48.017 5.01446 48.017 5.09208C48.017 5.10761 48.0013 5.13866 48.0013 5.15418L45.7953 8.60065L48.0958 12.1713C48.1116 12.2024 48.1273 12.2334 48.1273 12.2645C48.1116 12.3266 48.0643 12.3731 47.9697 12.3731Z" fill="white" />
                <path d="M27.0129 4.98342C26.9342 4.98342 26.8711 5.02999 26.8554 5.10761L25.39 10.4636C25.3742 10.5723 25.3427 10.6189 25.2482 10.6189C25.1536 10.6189 25.1221 10.5723 25.1063 10.4636L23.6409 5.10761C23.6252 5.02999 23.5622 4.98342 23.4834 4.98342H22.0337C21.9865 4.98342 21.9392 4.99894 21.9077 5.04552C21.8762 5.07657 21.8604 5.12314 21.8762 5.16971C21.8762 5.16971 23.6725 11.3175 23.6882 11.3796C23.9246 12.1092 24.5076 12.4663 25.2482 12.4663C25.9572 12.4973 26.6033 12.0471 26.8081 11.3796C26.8396 11.3019 28.5886 5.16971 28.5886 5.16971C28.6044 5.12314 28.5886 5.07657 28.5571 5.04552C28.5256 5.01447 28.4783 4.98342 28.4311 4.98342H27.0129Z" fill="white" />
                <path d="M18.8193 0H3.73988C3.18838 0 2.68416 0.294968 2.41629 0.745182C2.13266 1.21092 2.11691 1.78533 2.36902 2.25107L3.88169 5.07655H1.13997C0.793321 5.07655 0.462424 5.24732 0.273341 5.54229C0.0842566 5.83726 0.0842565 6.20985 0.241826 6.52034L5.09498 15.5557C5.26831 15.8817 5.61496 16.0835 5.97737 16.0835C6.33978 16.0835 6.68643 15.8817 6.85976 15.5557L8.18335 13.1028L9.83783 16.1922C10.1057 16.689 10.6414 16.9995 11.2087 16.9995C11.7759 16.9995 12.3117 16.689 12.5795 16.1922L20.1429 2.17345C20.395 1.70771 20.3793 1.14882 20.0956 0.714132C19.8435 0.263918 19.3551 0 18.8193 0ZM12.0753 5.91488L8.76636 12.0316C8.65606 12.2489 8.43546 12.3731 8.18335 12.3731C7.93124 12.3731 7.71064 12.2334 7.60034 12.0316L4.33864 5.97698C4.2441 5.79068 4.2441 5.57334 4.3544 5.38704C4.4647 5.20075 4.66954 5.09207 4.87438 5.09207H11.5553C11.7602 5.09207 11.9493 5.18522 12.0438 5.35599C12.1699 5.52676 12.1699 5.74411 12.0753 5.91488Z" fill="white" />
              </svg>
            </div>
          </div>
        </Footer>
        
        {isClosedToast && (
          <ToastAddProductCart>
            <div className="toast">
              <h1>Produto Adicionado no carrinho!</h1>

              <button
                onClick={isShowToast}
              >
                Fechar
              </button>
            </div>
          </ToastAddProductCart>
        )}
      </Container>
      
    </>
  );
}

export default Home;