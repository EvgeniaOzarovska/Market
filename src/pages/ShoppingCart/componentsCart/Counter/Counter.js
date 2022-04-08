import styles from './Counter.module.scss';
import plus from '../../../../components/Icon/img/add_black_24dp.svg';
import remove from '../../../../components/Icon/img/remove_black_24dp.svg';
import { Icon } from '../../../../components/Icon';
import { ShoppingCartContext } from '../../../../providers/ShoppingCartProvider';

export const Counter = props => {
  const { id, count } = props;
  return (
    <ShoppingCartContext.Consumer>
      {({ changeQuantityItem }) => (
        <div className={styles.addProduct}>
          <Icon
            colorSchema="iconCart"
            src={remove}
            alt={remove}
            onClick={() => changeQuantityItem(id, 'remove')}
          />
          <p>{count}</p>
          <Icon
            colorSchema="iconCart"
            src={plus}
            alt={plus}
            onClick={() => changeQuantityItem(id, 'plus')}
          />
        </div>
      )}
    </ShoppingCartContext.Consumer>
  );
};
