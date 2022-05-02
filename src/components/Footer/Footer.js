import { useContext } from 'react';
import styled from '@emotion/styled';
import { MyThemeContext } from '../../providers/AppThemeProvider';

export const Footer = () => {
  const { state } = useContext(MyThemeContext);

  const CustomFooter = styled.footer`
    width: 100%;
    background-color: ${state.theme.id === 'light' ? 'lightsteelblue' : 'teal'};
    border-top: 1px solid grey;
  `;
  const P = styled.p`
    font-size: 18px;
    font-style: italic;
    color: black;
  `;

  return (
    <CustomFooter>
      <P>OUR ADRESS: Kharkiv, Sumska Street, 45</P>
      <P>
        We and our partners may store and access data on a device, such as cookies, and process
        personal data, such as unique identifiers, sent by a device to personalise content, tailor
        and report on advertising and analyse our traffic.
      </P>
    </CustomFooter>
  );
};
