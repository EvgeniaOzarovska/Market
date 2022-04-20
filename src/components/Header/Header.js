import ShoppingCartIcon from '../Icons/img/shopping_cart.svg';
import { Link } from 'react-router-dom';
import { Routes } from '../../router';
import { Icon } from '../CommonComponents';
import { LogoText } from '../LogoText';
import styled from '@emotion/styled';

const CustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 90px;
  padding: 5px;
  background-color: lightsteelblue;
  border-bottom: 1px solid grey;
`;

const CustomHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomSection = styled.div`
  display: flex;
`;

const CustomLink = styled.a`
  color: darkblue;
  margin: 15px;
  &:hover {
    border-bottom: 2px solid darkslateblue;
    color: darkslateblue;
  }
`;

export const Header = () => {
  return (
    <CustomHeader>
      <Link to={Routes.Auth.Home}>
        <LogoText />
      </Link>
      <CustomHeaderBlock>
        <CustomSection>
          <Link to={Routes.Auth.Login}>
            <CustomLink>Sign In</CustomLink>
          </Link>
          <Link to={Routes.Auth.Reg}>
            <CustomLink>Sign Up</CustomLink>
          </Link>
        </CustomSection>
        <Link to={Routes.Auth.ShoppingCart}>
          <Icon alt="shopping cart" src={ShoppingCartIcon} />
        </Link>
      </CustomHeaderBlock>
    </CustomHeader>
  );
};
