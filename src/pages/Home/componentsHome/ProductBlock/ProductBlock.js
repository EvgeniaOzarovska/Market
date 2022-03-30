import styles from '../../Home.module.scss';
import { ItemCard } from '../ItemCard';

export const ProductBlock = props => {
  const renderData = () => {
    return props.productList.map((item, index) => {
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
    });
  };
  return <div className={props.className}>{renderData()}</div>;
};
