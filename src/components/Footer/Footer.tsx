import styled from '@emotion/styled';
import React from 'react';

export interface ICustomBG {
  theme?: {
    backgroundColorComponent: string;
  };
}

const CustomFooter = styled.footer<ICustomBG>`
  width: 100%;
  background-color: ${props => props.theme.backgroundColorComponent};
  border-top: 1px solid grey;
`;

const P = styled.p`
  font-size: 18px;
  font-style: italic;
  color: black;
  margin: 5px 15px;
  width: 70%;
`;

export const Footer = () => {
  return (
    <CustomFooter data-testid="footer">
      <P data-testid="footer-info">OUR ADRESS: Kharkiv, Sumska Street, 45</P>
      <P data-testid="footer-text">
        We and our partners may store and access data on a device, such as cookies, and process
        personal data, such as unique identifiers, sent by a device to personalise content, tailor
        and report on advertising and analyse our traffic.
      </P>
    </CustomFooter>
  );
};
