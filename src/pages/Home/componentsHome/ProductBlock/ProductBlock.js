import styles from '../../Home.module.scss';
import { ItemCard } from '../ItemCard';

export const ProductBlock = props => {
  const { productList } = props;
  return (
    <div className={props.className}>
      {productList.map(item => {
        return (
          <div key={item.id} className={styles.productCard}>
            <ItemCard data={item} />
          </div>
        );
      })}
    </div>
  );
};
