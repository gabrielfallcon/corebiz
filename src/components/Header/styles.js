import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    max-width: 150px;
  }

  @media (min-width: 768px) {
    max-width: 1110px;
    margin: 0 auto;
  }
`;

export const MenuMobile = styled.div`
  position: relative;

  svg {
    cursor: pointer;
  }

  .menu-mobile__options {
    width: 100vw;
    height: 100vh;
    display: none;
    position: absolute;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.6);

    .options__list {
      margin-bottom: 40%;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const InputBlock = styled.div`
  display: none;
  width: 100%;
  max-width: 680px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1px;
  border-bottom: 1px solid #000000; 
  font-weight: bold;
  
  svg {
    margin-left: 15px;
  }
  input {
    flex: 1;
    font-size: 16px;
    
    &::placeholder {
      color: #7A7A7A;
      font-size: 16px;
    }
  }
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Information = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  .informations__my-count {
    display: none;
    justify-content: center;
    align-items: center;
    
    svg {
      margin-right: 5px;
    }
    a {
      text-decoration: none;
      color: #7A7A7A;
      font-size: 13px;
    }
  }
  .informations__my-buy{
    display: flex;
    cursor: pointer;

    svg {
      margin-right: 4px;
    }
    .my-buy__count-buy {
      width: 14px;
      height: 14px;
      background: #F8475F;
      color: #FFF;
      font-size: 11px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-top: -3px;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 180px;
    justify-content: space-between;

    .informations__my-count {
      display: flex;
      a {
        color: #7A7A7A;
      }
    }
  }
`;

export const InputMobile = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .input-block {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1px;
    border-bottom: 1px solid #000000; 
    font-weight: bold;
    
    svg {
      margin-left: 15px;
    }
    input {
      flex: 1;
      font-size: 16px;
      padding: 0 5px;
      
      &::placeholder {
        color: #7A7A7A;
        font-size: 16px;
      }
    }
  }

  @media(min-width: 768px) {
    display: none;
  }
`;
