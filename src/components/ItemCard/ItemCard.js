import styles from './ItemCard.module.scss';
import { Button } from '../Button';

export const ItemCard = props => {
  return (
    <div className={styles.card_block}>
      <h3 className={styles.name}>{props.name}</h3>
      <img {...props} alt={props.name} src={props.pic} className={styles.card} />
      <p className={styles.price}>{props.price} </p>
      <Button type="button">Buy</Button>
    </div>
  );
};
