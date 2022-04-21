import { Routes } from '../../router';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { LargeIcon } from '../CommonComponents';
import { LogoText } from '../LogoText';
import ShoppingCartIcon from '../Icons/img/shopping_cart.svg';


const CustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 90px;
  padding: 5px;
  background-color: lightsteelblue;
  border-bottom: 1px solid grey;
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
`;

const MyLink = styled.a`
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
      <HeaderBlock>
        <Section>
          <Link to={Routes.Auth.Login}>
            <MyLink>Sign In</MyLink>
          </Link>
          <Link to={Routes.Auth.Reg}>
            <MyLink>Sign Up</MyLink>
          </Link>
        </Section>
        <Link to={Routes.Auth.ShoppingCart}>
          <LargeIcon alt="shopping cart" src={ShoppingCartIcon} />
        </Link>
      </HeaderBlock>
    </CustomHeader>
  );
};
