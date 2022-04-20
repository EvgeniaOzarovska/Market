import React from 'react';
import styles from './Counter.module.scss';
import plus from '../../../../components/Icons/img/add_black_24dp.svg';
import remove from '../../../../components/Icons/img/remove_black_24dp.svg';
import {
  setDecrementQuantityItem,
  setIncrementQuantityItem,
  ShoppingCartContext,
} from '../../../../providers/ShopingCartProvider';
import { Icon } from '../../../../components/CommonComponents';
import { useContext } from 'react';

export const Counter = props => {
  const { dispatch } = useContext(ShoppingCartContext);

  const { id, count } = props;
  return (
    <div className={styles.addProduct}>
      <Icon cart
        src={remove}
        alt={remove}
        onClick={() => dispatch(setDecrementQuantityItem({ id }))}
      />
      <p>{count}</p>
      <Icon cart
        src={plus}
        alt={plus}
        onClick={() => dispatch(setIncrementQuantityItem({ id }))}
      />
    </div>
  );
};
