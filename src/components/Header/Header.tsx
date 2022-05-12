import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Routes } from '../../router';
import { BigIcon } from '../CommonComponents';
import { LogoText } from '../LogoText';
// @ts-ignore
import ShoppingCartIcon from '../Icons/img/shopping_cart.svg';
import { Button } from '../CommonComponents';
import { MyThemeContext, setTheme, ThemeType, themeTypes } from '../../providers/AppThemeProvider';

const CustomHeader = styled.header<ThemeType>`
  display: flex;
  justify-content: space-between;
  height: 90px;
  padding: 5px 15px;
  background-color: ${props => props.theme.backgroundColorComponent};
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

export const Header = (props: any) => {
  const { dispatch }: any = useContext(MyThemeContext);
  const { LIGHT, DARK } = themeTypes;

  const changeTheme = () => {
    const currTheme = localStorage.getItem('theme');
    if (currTheme === LIGHT) {
      dispatch(setTheme(DARK));
    } else {
      dispatch(setTheme(LIGHT));
    }
  };

  return (
    <CustomHeader theme={props.theme}>
      <Link to={Routes.Auth.DefaultHome}>
        <LogoText />
      </Link>
      <HeaderBlock>
        <Section>
          <Button next onClick={changeTheme} cartstyle={false} theme={props.theme}>
            Change theme
          </Button>
          <Link to={Routes.Auth.Login}>
            <MyLink>Sign In</MyLink>
          </Link>
          <Link to={Routes.Auth.Reg}>
            <MyLink>Sign Up</MyLink>
          </Link>
        </Section>
        <Link to={Routes.Auth.ShoppingCart}>
          <BigIcon alt="shopping cart" src={ShoppingCartIcon} problem={false} />
        </Link>
      </HeaderBlock>
    </CustomHeader>
  );
};
