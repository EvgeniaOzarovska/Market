import styled from '@emotion/styled';

const Text = styled.div`
  font-size: 36px;
  color: darkslateblue;
  padding-top: 10px;
  text-shadow: 1px 1px 2px whitesmoke;
`;

export const LogoText = () => {
  return <Text data-testid="logo-text">Market</Text>;
};
