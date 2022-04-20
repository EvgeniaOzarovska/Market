import React from 'react';
import { Button } from '../../../../components/CommonComponents';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const AfterProductToCartModal = ({ isOpen, onClose, redirect }) => {
  return (
    <Modal isOpen={isOpen} centered backdrop="static">
      <ModalHeader>Message</ModalHeader>
      <ModalBody>You have added an item to your shopping cart</ModalBody>
      <ModalFooter>
        <Button cartstyle
          color="primary"
          onClick={() => {
            onClose();
          }}
        >
          Сontinue shopping
        </Button>
        <Button cartstyle color="primary" onClick={redirect}>
          Go to Cart
        </Button>
      </ModalFooter>
    </Modal>
  );
};
