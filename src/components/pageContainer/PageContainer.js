import styled from '@emotion/styled';
import { useContext } from 'react';
import { MyThemeContext } from '../../providers/AppThemeProvider';

export const PageContainer = ({ children }) => {
  const { state } = useContext(MyThemeContext);

  const Container = styled.main`
    display: flex;
    flex: 1;
    background-color: ${state.theme.backgroundColor};
  `;

  return <Container>{children}</Container>;
};
