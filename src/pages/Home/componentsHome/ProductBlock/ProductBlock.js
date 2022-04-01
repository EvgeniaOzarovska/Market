import styles from '../../Home.module.scss';
import { ItemCard } from '../ItemCard';

export const ProductBlock = props => {
  const { productList } = props;
  return (
    <div className={props.className}>
      {productList.map((item, index) => {
        return (
          <div key={index} className={styles.productCard}>
            <ItemCard
              pic={item.pic}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};
