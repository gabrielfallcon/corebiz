import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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
      width: 32.5px;
      height: 6px;
      background: #C0C0C0;
      display: block;
      margin-top: 5px;
    }
  }
`;

export const NewsLetter = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F2F2F2;
  flex-direction: column;

  h1 {
    color: #333333;
    font-size: 32px;
    line-height: 36px;
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
      width: 100%;
      height: 80px;
      background: #FFFFFF;
      padding: 17px 16px;
      border-radius: 8px;
      color: #585858;
      font-size: 16px;
      font-weight: 600;

      & + input {
        margin-top: 22px;
      }
      &::placeholder {
        font-size: 18px;
        color: #585858;
        font-weight: 700;
      }
    }
    button {
      width: 100%;
      height: 80px;
      background: #000000;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 7px;
      font-size: 24px;
      font-weight: 700;
      border-radius: 8px;
    }
  }

  @media (min-width: 768px) {
    padding: 36px 0;

    form {
      flex-direction: row;

      input {
        height: 70px;
        max-width: 380px;
        margin-top: 0!important;

        & + input {
          margin-left: 8px;
        }
      }
      button {
        height: 70px;
        max-width: 140px;
        margin-left: 8px;
        margin-top: 0;
        font-size: 22px;
      }
    }
  }
`;
