import styled from '@emotion/styled';
import { Routes } from '../../../router';
import { Link } from 'react-router-dom';

const PageNotFoundBlock = styled.div`
  height: 100%;
  width: 100%;
`;

const PageNotFoundText = styled.p`
  font-size: 42px;
  text-align: center;
  margin-top: 200px;
  color: darkgray;
  background: #ffffff;
  text-shadow: 2px 2px 0 black;
`;

export const PageNotFound = () => (
  <PageNotFoundBlock>
    <Link to = {Routes.Auth.Home}>
    <PageNotFoundText>PAGE NOT FOUND</PageNotFoundText>
    </Link>
  </PageNotFoundBlock>
);
