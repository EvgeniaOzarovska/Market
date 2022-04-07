import close from '../../../../components/Icon/img/close_black_24dp.svg';
import styles from './OrderCart.module.scss';
import { Icon } from '../../../../components/Icon';
import { Counter } from '../Counter';
import { ShoppingCartContext } from '../../../../providers/ShoppingCartProvider';

export const OrderCart = props => {
  return (
    <ShoppingCartContext.Consumer>
      {({ deleteItem }) => (
        <div className={styles.block} key={props.card.id}>
          <img className={styles.pic} src={props.card.image} alt="name" />
          <h4 className={styles.nameProduct}>{props.card.name}</h4>
          <Counter count={props.card.count} id={props.card.id} />
          <p className={styles.priceProduct}>{props.card.price * props.card.count} UAH</p>
          <Icon colorSchema="iconCart" src={close} alt="close" onClick={() => {
            deleteItem(props.card.id);
          }} />
        </div>
      )}
    </ShoppingCartContext.Consumer>
  );
};
