import React from 'react';
import { Button } from '../../../../components/Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../router';

export const AfterProductToCartModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} centered backdrop="static">
      <ModalHeader>Message</ModalHeader>
      <ModalBody>You have added an item to your shopping cart</ModalBody>
      <ModalFooter>
        <Link to={Routes.Auth.Home}>
          <Button
            color="primary"
            onClick={() => {
              onClose();
              onSubmit();
            }}
          >
            Сontinue shopping
          </Button>
        </Link>
        <Link to={Routes.Auth.ShoppingCart}>
          <Button color="primary" onClick={onClose}>
            Go to Cart
          </Button>
        </Link>
      </ModalFooter>
    </Modal>
  );
};
