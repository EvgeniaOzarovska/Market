import styles from './ItemCard.module.scss';
import { Button } from '../../../../components/Button';
import { Routes } from '../../../../router';
import { useHistory } from 'react-router-dom';
import { ShoppingCartContext } from '../../../../providers/ShoppingCartProvider';

export const ItemCard = props => {
  const history = useHistory();
  return (
    <ShoppingCartContext.Consumer>
      {({ addItem }) => (
        <div className={styles.card_block}>
          <h3 className={styles.name}>{props.name}</h3>
          <img alt={props.name} src={props.pic} className={styles.card} />
          <p className={styles.description}>{props.description}</p>
          <p className={styles.price}>{props.price}</p>
          <Button
            type="button"
            onClick={() => {
              addItem({id: props.id, name: props.name, count: 1, image: props.pic, price: props.price});
              history.push(Routes.Auth.ShoppingCart);
            }}
          >
            Buy
          </Button>
        </div>
      )}
    </ShoppingCartContext.Consumer>
  );
};
