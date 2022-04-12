import React from 'react';
import styles from './Counter.module.scss';
import plus from '../../../../components/Icon/img/add_black_24dp.svg';
import remove from '../../../../components/Icon/img/remove_black_24dp.svg';
import { ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import { Icon } from '../../../../components/Icon';

export const Counter = props => {
  const { incrementQuantityItem, decrementQuantityItem } = React.useContext(ShoppingCartContext);

  const { id, count } = props;
  return (
    <div className={styles.addProduct}>
      <Icon
        colorSchema="iconCart"
        src={remove}
        alt={remove}
        onClick={() => decrementQuantityItem(id)}
      />
      <p>{count}</p>
      <Icon
        colorSchema="iconCart"
        src={plus}
        alt={plus}
        onClick={() => incrementQuantityItem(id)}
      />
    </div>
  );
};
