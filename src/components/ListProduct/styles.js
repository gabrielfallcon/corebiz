import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  align-items: center;

  li {
    width: 100%;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & + li {
      margin-left: 38px;
    }

    & > span {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 18px;
      font-weight: 800;
      color: #FFF;
      z-index: 10;
      text-transform: uppercase;
    }
    .promotion {
      width: 0; 
      height: 0; 
      border-left: 70px solid transparent;
      border-right: 70px solid transparent;
      border-bottom: 70px solid #F8475F;
      transform: rotate(45deg);
      position: absolute;
      top: -2.5%;
      right: -20%;
    }
    img {
      width: 100%;
    }
    .product-description {
      width: 100%;
      transition: .4s;
      padding-top: 5px;

      h2{
        text-align: center;
        color: #7A7A7A;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      .block-star {
        margin-bottom: 20px;
      }
      .price {
        width: 100%;
        display: flex;
        flex-direction: column;

        h1 {
          font-size: 24px;
          text-align: center;
          margin-bottom: 10px;
        }
        & > span {
          color: #7A7A7A;
          font-size: 13px;
          font-weight: 400;
          text-transform: uppercase;
          margin-bottom: 9px;
          text-align: center;
        }
        .buy-button {
          height: 60px;
          button {
            width: 100%;
            height: 50px;
            font-size: 22px;
            color: #FFFFFF;
            background: #000000;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            font-weight: 700;
            border-radius: 8px;
            transition: .4s;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    li {
      .product-description {
        &:hover {
          background: #E6E8EA;
          cursor: pointer;

          .price {
            .buy-button { 
              button {
                display: block;
              }
            }
          }
        }
        .price {
          .buy-button { 
            button{
              display: none;
              max-width: 200px;
              height: 50px;
              margin: 0 auto;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`;
