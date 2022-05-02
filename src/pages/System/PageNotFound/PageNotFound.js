import { useContext } from 'react';
import styled from '@emotion/styled';
import { Routes } from '../../../router';
import { Link } from 'react-router-dom';
import { MyThemeContext } from '../../../providers/AppThemeProvider';

export const PageNotFound = () => {
  const { state } = useContext(MyThemeContext);

  const PageNotFoundText = styled.p`
    font-size: 42px;
    text-align: center;
    color: darkgray;
    background: ${state.theme.backgroundColor};
    text-shadow: 2px 2px 0 black;
  `;

  const Page = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  `;

  return (
    <Page>
      <Link to={Routes.Auth.Home.replace(':category', 'smartphone')}>
        <PageNotFoundText>PAGE NOT FOUND</PageNotFoundText>
      </Link>
    </Page>
  );
};
