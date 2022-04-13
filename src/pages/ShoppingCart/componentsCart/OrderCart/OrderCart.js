import React, { useContext } from 'react';
import { Counter } from '../Counter';
import { Icon } from '../../../../components/Icon';
import { ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import close from '../../../../components/Icon/img/close_black_24dp.svg';
import styles from './OrderCart.module.scss';

export const OrderCart = props => {
  const { deleteItem } = useContext(ShoppingCartContext);

  const { id, image, name, count, price } = props.card;

  return (
    <div className={styles.block} key={id}>
      <img className={styles.pic} src={image} alt="name" />
      <div className={styles.nameProduct}>{name}</div>
      <Counter count={count} id={id} />
      <p className={styles.priceProduct}>{price * count} UAH</p>
      <Icon
        colorSchema="iconCart"
        src={close}
        alt="close"
        onClick={() => {
          deleteItem(id);
        }}
      />
    </div>
  );
};
