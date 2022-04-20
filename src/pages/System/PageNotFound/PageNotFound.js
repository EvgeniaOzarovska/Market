import { history, Routes } from '../../../router';
import styled from '@emotion/styled';

const CustomPageNotFoundBlock = styled.div`
  height: 100%;
  width: 100%;
`;

const CustomPageNotFoundText = styled.p`
  font-size: 42px;
  text-align: center;
  margin-top: 200px;
  color: darkgray;
  background: #ffffff;
  text-shadow: 2px 2px 0 black;
`;

export const PageNotFound = () => (
  <CustomPageNotFoundBlock onClick={() => history.push(Routes.Auth.Home)}>
    <CustomPageNotFoundText>PAGE NOT FOUND</CustomPageNotFoundText>
  </CustomPageNotFoundBlock>
);
