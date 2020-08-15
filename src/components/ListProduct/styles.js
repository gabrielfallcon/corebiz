import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  align-items: center;

  .rec-carousel-wrapper {
    .rec-carousel {
      .rec-arrow  {
        display: none;
      }
      .rec-slider-container {
        .rec-slider {
          .rec {
            .rec-item-wrapper {
              
              li {
                width: 100%;
                max-width: 280px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                

                & > span {
                  position: absolute;
                  top: 10px;
                  right: 2px;
                  font-size: 18px;
                  font-weight: 800;
                  color: #FFF;
                  z-index: 10;
                  text-transform: uppercase;
                }
                .promotion {
                  width: 0; 
                  height: 0; 
                  border-left: 60px solid transparent;
                  border-right: 60px solid transparent;
                  border-bottom: 60px solid #F8475F;
                  transform: rotate(45deg);
                  position: absolute;
                  top: -2.5%;
                  right: -22%;
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
                    text-align: center;
                  }
                  .price {
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    span {
                      height: 10px;
                    }

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
                        font-size: 18px;
                        font-weight: 700;
                        color: #FFFFFF;
                        background: #000000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-transform: uppercase;
                        border-radius: 8px;
                        transition: .4s;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .rec-pagination {
      button {
        box-shadow: none;
        background: #BDBDBD;
      }
      .rec-dot_active {
        background: #F8475F;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 70px;
    
    .rec-carousel-wrapper {
      .rec-carousel {
        .rec-arrow  {
          display: block;
          box-shadow: none;
          background: transparent;
          color: #000000;
          
        }
        .rec-slider-container {
          .rec-slider {
            width: 100%;
            justify-content: space-between;
            .rec {
              .rec-item-wrapper { 
                width: 242px !important;
                li {
                  .product-description {
                    h2 {
                      font-size: 12px;
                    }

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
                          height: 40px;
                          margin: 0 auto;
                          font-size: 16px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .rec-pagination {
        display: none !important;
      }
    }
  }
`;
