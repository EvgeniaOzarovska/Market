import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button } from '../../../../components/CommonComponents';
import styled from '@emotion/styled';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  redirect: () => void;
}

interface IModalTheme {
  theme?: {
    color: string;
    backgroundColor: string;
    backgroundColorComponent: string;
  };
}

const Header = styled(ModalHeader)<IModalTheme>`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColorComponent};
`;

const Footer = styled(ModalFooter)<IModalTheme>`
  background-color: ${props => props.theme.backgroundColorComponent};
`;

const Body = styled(ModalBody)<IModalTheme>`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`;

export const AfterProductToCartModal = (props: IModal) => {
  const { isOpen, onClose, redirect } = props;
  return (
    <Modal isOpen={isOpen} centered backdrop="static" data-testid="card-block-modal">
      <Header>Message</Header>
      <Body>You have added an item to your shopping cart</Body>
      <Footer>
        <Button cartstyle onClick={onClose} data-testid="close-btn">
          Сontinue shopping
        </Button>
        <Button cartstyle onClick={redirect} data-testid="redirect-btn">
          Go to Cart
        </Button>
      </Footer>
    </Modal>
  );
};
