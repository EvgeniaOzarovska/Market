import styled from '@emotion/styled';
import { Routes } from '../../../router';
import { Link } from 'react-router-dom';

interface IPage{
  theme?:{
    backgroundColor: string
  }
}

const PageNotFoundText = styled.p`
  font-size: 42px;
  text-align: center;
  color: darkgray;
  text-shadow: 2px 2px 0 black;
`;

const Page = styled.div<IPage>`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${props => props.theme.backgroundColor};
`;

export const PageNotFound = () => {
  return (
    <Page>
      <Link to={Routes.Auth.DefaultHome}>
        <PageNotFoundText>PAGE NOT FOUND</PageNotFoundText>
      </Link>
    </Page>
  );
};
