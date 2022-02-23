import merge from 'classnames';
import styles from './ItemCard.module.scss'
export const ItemCard = (props) => {
  return <div>
    <img {...props}
      alt={props}
      className={merge(styles.card, props.className)} />
    <p className={styles.card}>{props.children}</p>
  </div>
}