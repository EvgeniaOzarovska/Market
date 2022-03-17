import styles from './ItemCard.module.scss';
import { Button } from '../Button';

export const ItemCard = props => {
  return (
    <div className={styles.card_block}>
      <h3 className={styles.name}>{props.name}</h3>
      <img alt={props.name} src={props.pic} className={styles.card} />
      <p className={styles.description}>{props.description}</p>
      <p className={styles.price}>{props.price}</p>
      <Button type="button">Buy</Button>
    </div>
  );
};
