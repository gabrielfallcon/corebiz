import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  position: relative;

  input {
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    padding: 17px 16px;
    border-radius: 8px;
    color: #585858;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #FFFFFF;

    & + input {
      margin-top: 22px;
    }
    &::placeholder {
      font-size: 18px;
      color: #585858;
      font-weight: 700;
    }

    ${(props) => 
      props.isErrored &&
      css`
        border-color: #D7182A !important;
      `
    }
  }

  span {
    color: #D7182A;
  }

  @media (min-width: 768px) {
    margin-left: 8px;
    
    input {
      width: 100%;
      height: 60px;
      max-width: 380px;
      margin-top: 0!important;
    }

    span {
      position: absolute;
      bottom: -45%;
      left: 2%;
    }
  }
`;
