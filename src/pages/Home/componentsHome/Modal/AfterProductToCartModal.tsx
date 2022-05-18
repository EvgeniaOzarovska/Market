import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button } from '../../../../components/CommonComponents';
import styled from '@emotion/styled';

interface ModalType {
  isOpen: boolean;
  onClose: () => void;
  redirect: () => void;
}

interface IModal {
  theme?: {
    color: string;
    backgroundColor: string;
    backgroundColorComponent: string;
  };
}

const Header = styled(ModalHeader)<IModal>`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColorComponent};
`;

const Footer = styled(ModalFooter)<IModal>`
  background-color: ${props => props.theme.backgroundColorComponent};
`;

const Body = styled(ModalBody)<IModal>`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`;

export const AfterProductToCartModal = (props: ModalType) => {
  return (
    <Modal isOpen={props.isOpen} centered backdrop="static">
      <Header>Message</Header>
      <Body>You have added an item to your shopping cart</Body>
      <Footer>
        <Button cartstyle next={false} onClick={props.onClose}>
          Сontinue shopping
        </Button>
        <Button cartstyle next={false} onClick={props.redirect}>
          Go to Cart
        </Button>
      </Footer>
    </Modal>
  );
};
