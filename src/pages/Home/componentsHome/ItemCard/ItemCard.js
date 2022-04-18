import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AfterProductToCartModal } from '../Modal';
import { Button } from '../../../../components/Button';
import { setAddItem, ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import { Routes } from '../../../../router';
import styles from './ItemCard.module.scss';


export const ItemCard = props => {
  const history = useHistory();
  const { dispatch } = useContext(ShoppingCartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { id, name, image, description, price } = props.data;
  const addItem = () => {
    dispatch(
      setAddItem({
        id,
        name,
        count: 1,
        image,
        price,
      }),
    );
    setModalIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={styles.card_block}>
        <div className={styles.name}>{name}</div>
        <img alt={name} src={image} className={styles.card} />
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}</p>
        <Button onClick={addItem}>
          Buy
        </Button>
      </div>
      <AfterProductToCartModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        redirect={() => history.push(Routes.Auth.ShoppingCart)}
      />
    </React.Fragment>
  );
};
