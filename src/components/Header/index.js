import React from 'react';
import { 
  FiSearch, 
  FiUser, 
  FiShoppingCart,
  FiAlignJustify
} from 'react-icons/fi';

import { 
  Container,
  MenuMobile,
  InputBlock,
  Information,
  InputMobile
} from './styles';

const Header = () => {
  return (
    <>
      <Container>
        <MenuMobile className="menu-mobile">
          <FiAlignJustify size={40}/>

          <div className="menu-mobile__options">
            <ul className="options__list">
              <li>Minha Conta</li>
            </ul>
          </div>
        </MenuMobile>

        <svg width="120" height="40" viewBox="0 0 103 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M84.4043 24.9396H80.586V7.55919H84.4043V24.9396Z" fill="black"/>
          <path d="M8.28785 11.1229C7.6975 11.1147 7.11201 11.2327 6.56907 11.4694C6.02614 11.706 5.5378 12.0561 5.13551 12.497C4.27712 13.403 3.84793 14.6563 3.84793 16.2418C3.84793 17.8274 4.27712 19.1109 5.15031 20.032C5.5588 20.4782 6.0542 20.8322 6.60473 21.0715C7.15525 21.3107 7.74873 21.4298 8.34705 21.4212C9.47183 21.4212 10.3746 21.1041 11.0554 20.485C11.6883 19.9219 12.1547 19.1898 12.4022 18.371L15.7765 19.6243C15.3325 21.089 14.4741 22.3575 13.2014 23.4145C11.9286 24.4715 10.3154 25 8.34705 25C5.97909 25 3.99593 24.1695 2.39756 22.4934C0.799185 20.8172 0 18.7334 0 16.2418C0 13.7201 0.784386 11.6363 2.36796 9.99034C3.95153 8.34441 5.90509 7.51389 8.25825 7.51389C10.271 7.51389 11.9138 8.0424 13.1866 9.09942C14.3933 10.067 15.2604 11.4074 15.6581 12.9198L12.2098 14.2033C12.0027 13.3672 11.5603 12.6113 10.937 12.0289C10.2873 11.4249 9.41411 11.1229 8.28785 11.1229Z" fill="black"/>
          <path d="M22.1123 19.9867C22.5378 20.426 23.0442 20.775 23.6025 21.0137C24.1608 21.2524 24.7598 21.376 25.3651 21.3774C25.9704 21.3788 26.57 21.258 27.1294 21.0219C27.6887 20.7858 28.1967 20.4391 28.6242 20.0018C29.5121 19.0807 29.9561 17.8123 29.9561 16.1663C29.9561 14.5506 29.5121 13.2973 28.6242 12.3913C27.7554 11.5203 26.5862 11.0323 25.3682 11.0323C24.1503 11.0323 22.981 11.5203 22.1123 12.3913C21.2243 13.2973 20.7803 14.5506 20.7803 16.1663C20.7803 17.7821 21.2243 19.0656 22.1123 19.9867ZM25.3682 7.51389C27.8398 7.51389 29.8821 8.32931 31.4805 9.96014C33.0789 11.591 33.8929 13.6597 33.8929 16.1814C33.8929 18.7032 33.0937 20.7719 31.4805 22.4179C29.8673 24.0638 27.8398 24.8792 25.3682 24.8792C22.9263 24.8792 20.8987 24.0638 19.2855 22.4179C17.6724 20.7719 16.8732 18.6881 16.8732 16.1814C16.8732 13.6748 17.6724 11.6061 19.2855 9.96014C20.8987 8.31421 22.9115 7.51389 25.3682 7.51389Z" fill="black"/>
          <path d="M43.8531 7.61959V11.591C43.4367 11.5258 43.0163 11.4905 42.5951 11.4853C39.6944 11.4853 38.2588 12.9349 38.2588 16.1512V24.8792H34.4109V7.55919H38.1552V10.3376C38.5233 9.46311 39.1629 8.73624 39.9755 8.26891C40.8423 7.75596 41.8301 7.49486 42.8319 7.51389C43.1751 7.51089 43.5175 7.54634 43.8531 7.61959Z" fill="black"/>
          <path d="M49.107 14.3996H57.676C57.6624 13.9109 57.5518 13.4301 57.3508 12.9863C57.1498 12.5425 56.8627 12.1448 56.5068 11.8175C55.7817 11.1229 54.7309 10.7756 53.3693 10.7756C52.1261 10.7756 51.1197 11.138 50.365 11.8628C49.6102 12.5876 49.181 13.4392 49.107 14.3996ZM58.1348 18.6579L61.6424 19.6998C61.1392 21.1947 60.2068 22.433 58.8304 23.4145C57.454 24.396 55.7669 24.8792 53.7541 24.8792C51.2677 24.8792 49.1662 24.0789 47.4346 22.4934C45.703 20.9078 44.8299 18.7787 44.8299 16.1059C44.8299 13.5993 45.6734 11.5306 47.3606 9.92994C48.96 8.35578 51.1028 7.48778 53.3249 7.51389C56.0037 7.51389 58.0904 8.28401 59.6 9.80914C61.1096 11.3343 61.8629 13.403 61.8629 16.0063C61.8629 16.7009 61.8333 17.1086 61.7593 17.2445H49.0019C49.0179 17.8288 49.1555 18.4029 49.4055 18.9288C49.6556 19.4547 50.0124 19.9203 50.4523 20.2948C51.374 21.0999 52.5543 21.53 53.7674 21.5028C56.0037 21.5118 57.4688 20.5605 58.1348 18.6579Z" fill="black"/>
          <path d="M66.5855 24.9396H62.6783V0H66.6151V10.0417C67.0294 9.34706 67.7102 8.75815 68.6574 8.29005C69.6745 7.80035 70.7889 7.55744 71.9134 7.58033C74.3553 7.58033 76.2645 8.38065 77.6409 9.99638C79.0172 11.6121 79.698 13.6657 79.698 16.1724C79.698 18.7243 78.9728 20.8082 77.5373 22.4541C76.1017 24.1 74.1777 24.9003 71.7802 24.9003C69.3826 24.9003 67.651 24.0396 66.5855 22.3031V24.9396ZM74.3849 20.0018C75.2285 19.0656 75.6429 17.7972 75.6429 16.1965C75.6429 14.5959 75.2285 13.3426 74.3997 12.4215C73.5709 11.5004 72.4758 11.0474 71.1142 11.0474C69.797 11.0474 68.7166 11.5004 67.8582 12.4215C66.9999 13.3426 66.5855 14.5959 66.5855 16.1965C66.5855 17.7972 67.0147 19.0354 67.8582 19.9867C68.7018 20.938 69.797 21.4061 71.1142 21.4061C72.461 21.4061 73.5413 20.938 74.3849 20.0018Z" fill="black"/>
          <path d="M102.46 24.9245H85.6179V21.5118L96.2589 11.0021H85.4403V7.55919H102.43V10.8722L91.6562 21.4726H102.46V24.9305V24.9245Z" fill="black"/>
        </svg>

        <InputBlock className="input-block">
          <input type="search" placeholder="O que está procurando?"/>
          <FiSearch size={25}/>
        </InputBlock>

        <Information className="informations">
          <li className="informations__my-count">
            <FiUser size={25}/>
            <a href="">Minha Conta</a>
          </li>

          <li className="informations__my-buy">
            <FiShoppingCart size={25}/>
            <div className="my-buy__count-buy">
              1
              </div>
          </li>
        </Information>
      </Container>

      <InputMobile >
        <div className="input-block">
          <input 
            type="search" 
            placeholder="O que está procurando?"
          />

          <FiSearch size={28}/>
        </div>
      </InputMobile>
    </>
  );
}

export default Header;