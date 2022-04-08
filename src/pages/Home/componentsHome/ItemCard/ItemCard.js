import styles from './ItemCard.module.scss';
import { Button } from '../../../../components/Button';
import { Routes } from '../../../../router';
import { useHistory } from 'react-router-dom';
import { ShoppingCartContext } from '../../../../providers/ShoppingCartProvider';

export const ItemCard = props => {
  const { id, name, image, description, price } = props.data;
  const history = useHistory();
  return (
    <ShoppingCartContext.Consumer>
      {({ addItem }) => (
        <div className={styles.card_block}>
          <h3 className={styles.name}>{name}</h3>
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
