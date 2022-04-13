import styles from './ItemCard.module.scss';
import { Button } from '../../../../components/Button';
import React, { useState } from 'react';
import { ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import { AfterProductToCartModal } from '../Modal';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../../router';

export const ItemCard = props => {
  const history = useHistory();
  const { addItem } = React.useContext(ShoppingCartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { id, name, image, description, price } = props.data;

  return (
    <React.Fragment>
      <div className={styles.card_block}>
        <div className={styles.name}>{name}</div>
        <img alt={name} src={image} className={styles.card} />
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}</p>
        <Button
          type="button"
          onClick={() => {
            addItem({
              id,
              name,
              count: 1,
              image,
              price,
            });
            setModalIsOpen(true);
          }}
        >
          Buy
        </Button>
      </div>
      <AfterProductToCartModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onSubmit={() => history.push(Routes.Auth.ShoppingCart)}
      />
    </React.Fragment>
  );
};
