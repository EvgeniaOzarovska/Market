import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button } from '../../../../components/CommonComponents';
import styled from '@emotion/styled';

const Header = styled(ModalHeader)`
  color: ${props => {
    return props.theme.color;
  }};
  background-color: ${props => {
    return props.theme.backgroundColorComponent;
  }};
`;

const Footer = styled(ModalFooter)`
  background-color: ${props => {
    return props.theme.backgroundColorComponent;
  }};
`;

const Body = styled(ModalBody)`
  color: ${props => {
    return props.theme.color;
  }};
  background-color: ${props => {
    return props.theme.backgroundColor;
  }};
`;

export const AfterProductToCartModal = ({ isOpen, onClose, redirect }) => {
  return (
    <Modal isOpen={isOpen} centered backdrop="static">
      <Header>Message</Header>
      <Body>You have added an item to your shopping cart</Body>
      <Footer>
        <Button cartstyle onClick={onClose}>
          Сontinue shopping
        </Button>
        <Button cartstyle onClick={redirect}>
          Go to Cart
        </Button>
      </Footer>
    </Modal>
  );
};
