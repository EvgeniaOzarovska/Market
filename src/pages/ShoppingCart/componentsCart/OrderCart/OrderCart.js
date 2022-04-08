import close from '../../../../components/Icon/img/close_black_24dp.svg';
import styles from './OrderCart.module.scss';
import { Icon } from '../../../../components/Icon';
import { Counter } from '../Counter';
import { ShoppingCartContext } from '../../../../providers/ShoppingCartProvider';

export const OrderCart = props => {
  const { id, image, name, count, price } = props.card;

  return (
    <ShoppingCartContext.Consumer>
      {({ deleteItem }) => (
        <div className={styles.block} key={id}>
          <img className={styles.pic} src={image} alt="name" />
          <h4 className={styles.nameProduct}>{name}</h4>
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
      )}
    </ShoppingCartContext.Consumer>
  );
};
