import React, { useContext } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button } from '../../../../components/CommonComponents';
import styled from '@emotion/styled';
import { IThemeType, MyThemeContext } from '../../../../providers/AppThemeProvider';

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  redirect: () => void;
};

const Header = styled(ModalHeader)<IThemeType>`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColorComponent};
`;

const Footer = styled(ModalFooter)<IThemeType>`
  background-color: ${props => props.theme.backgroundColorComponent};
`;

const Body = styled(ModalBody)<IThemeType>`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`;

export const AfterProductToCartModal = (props: ModalType) => {
  const { theme } = useContext(MyThemeContext);
  return (
    <Modal isOpen={props.isOpen} centered backdrop="static">
      <Header theme={theme}>Message</Header>
      <Body theme={theme}>You have added an item to your shopping cart</Body>
      <Footer theme={theme}>
        <Button cartstyle next={false} theme={theme} onClick={props.onClose}>
          Сontinue shopping
        </Button>
        <Button cartstyle next={false} theme={theme} onClick={props.redirect}>
          Go to Cart
        </Button>
      </Footer>
    </Modal>
  );
};
