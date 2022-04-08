import styles from '../../Home.module.scss';
import { ItemCard } from '../ItemCard';

export const ProductBlock = props => {
  const { productList } = props;
  return (
    <div className={props.className}>
      {productList.map((item, index) => {
        const cardData = {
          id: item.id,
          image: item.pic,
          name: item.name,
          description: item.description,
          price: item.price,
        };
        return (
          <div key={index} className={styles.productCard}>
            <ItemCard data={cardData} />
          </div>
        );
      })}
    </div>
  );
};
