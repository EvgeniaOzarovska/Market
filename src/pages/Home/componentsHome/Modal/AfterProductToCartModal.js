import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button } from '../../../../components/CommonComponents';

export const AfterProductToCartModal = ({ isOpen, onClose, redirect }) => {
  return (
    <Modal isOpen={isOpen} centered backdrop="static">
      <ModalHeader>Message</ModalHeader>
      <ModalBody>You have added an item to your shopping cart</ModalBody>
      <ModalFooter>
        <Button
          cartstyle
          onClick={() => {
            onClose();
          }}
        >
          Сontinue shopping
        </Button>
        <Button cartstyle onClick={redirect}>
          Go to Cart
        </Button>
      </ModalFooter>
    </Modal>
  );
};
