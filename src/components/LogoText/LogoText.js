import styled from '@emotion/styled';

const CustomLogoText = styled.div`
  font-size: 36px;
  color: darkslateblue;
  padding-top: 10px;
  text-shadow: 1px 1px 2px whitesmoke;
`;

export const LogoText = () => {
  return <CustomLogoText>Market</CustomLogoText>;
};
