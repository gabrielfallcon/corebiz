import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Banner = styled.div`
  width: 100%;
  margin-top: 24px;

  img {
    width: 100%;
  }
`;

export const ProductsBuy = styled.div`
  width: 100%;
  margin-top: 17px;
  padding: 0 20px;
  margin: 17px auto;
  
  & > h1 {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 15px;

    &::after {
      content: '';
      width: 52.5px;
      height: 6px;
      background: #C0C0C0;
      display: block;
      margin-top: 5px;
    }
  }

  @media (min-width: 768px) {
    max-width: 1110px;
    margin: 0 auto;

    h1 {
      margin: 30px 0;
      font-size: 32px;

      &::after {
        width: 82.5px;
      }
    }
  }
`;

export const NewsLetter = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F2F2F2;
  flex-direction: column;

  h1 {
    color: #333333;
    font-size: 26px;
    line-height: 30px;
    font-weight: bold;
    padding: 24px  0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      border: 1px solid #BDBDBD;
      margin-top: 8px;
    }
    button {
      width: 100%;
      height: 60px;
      background: #000000;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 7px;
      font-size: 20px;
      font-weight: 700;
      border-radius: 8px;
    }
  }

  @media (min-width: 768px) {
    padding: 36px 0;

    form {
      flex-direction: row;

      button {
        height: 60px;
        max-width: 180px;
        margin-left: 8px;
        margin-top: 0;
        font-size: 22px;
      }
    }
  }
`;

export const SendEmailSuccess = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    width: 100%;
    max-width: 480px;
    margin-bottom: 5px;
    padding: 0;
  }

  span {
    width: 100%;
    max-width: 480px;
    margin: 0;
    color: #7A7A7A;
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    max-width: 480px;
    height: 70px;
    background: #000000;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 27px 20px 13px 20px;
  background: #000000;
  border-bottom: 6px solid #C0C0C0;

  .content {
    ul.footer__andress {
      color: #FFFFFF;
      list-style: none;
      line-height: 32px;
      margin-bottom: 40px;

      h1 {
        color: #FFFFFF;
        margin-bottom: 15px;
        font-size: 20px;

        &::after {
          content: '';
          width: 35px;
          height: 5px;
          margin-top: 10px;
          background: #FFFFFF; 
          display: block;
        }
      }
    }
    .footer__buttons {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 30px;

      a {
        width: 100%;
        height: 60px;
        color: #000000;
        text-transform: uppercase;
        max-width: 300px;
        background: #FFFFFF;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        line-height: 20px;
        font-size: 16px;
        padding: 14px 17px;
        border-radius: 8px;
        font-weight: 600;

        & + a {
          margin-top: 30px;
        }

        svg {
          margin-right: 35px;
        }
      }
    }
    .footer__seal {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      svg {
        width: 100px;
        margin-top: 20px;
      }
    }
  }

  @media (min-width: 768px) {
    .content{
      max-width: 1110px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .footer__andress {
        width: 100%;
        max-width: 350px;
      }
      .footer__buttons {
        width: 100%;
        max-width: 350px;

        a {
          height: 60px;
          width: 100%;

          svg {
            margin-right: 35px;
          }
        }
      }
      .footer__seal {
        max-width: 300px;
      }
    }
  }
`;

export const ToastAddProductCart = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 30;
  top: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  .toast {
    width: 90%;
    height: 250px;
    background: #F8475F;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: #FFF;
      text-align: center;
      margin-bottom: 34px;
    }

    button {
      width: 140px;
      height: 50px;
      border-radius: 8px;
      color: #F8475F;
      background: #FFF;
      font-size: 20px;
      font-weight: 800;
    }
  }
  
`;