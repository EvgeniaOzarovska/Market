import styles from './ShoppingCart.module.scss';
import { OrderCart } from './componentsCart/OrderCart/OrderCart';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Routes } from '../../router';
import { ShoppingCartContext } from '../../providers/ShoppingCartProvider';

export const ShoppingCart = () => {
  const calculateAmountPrice = data => {
    return data.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  };

  return (
    <ShoppingCartContext.Consumer>
      {store => (
        <main className={styles.container}>
          <div className={styles.mainBlock}>
            {store.data.length > 0 &&
              store.data.map((cartItem) => {
                return <OrderCart card={cartItem} />;
              })}
            <div className={styles.btnBlock}>
              Total amount: {calculateAmountPrice(store.data)} UAH
              <Link to={Routes.Auth.Home}>
                <Button typeSchema="cartButton">Сontinue shopping</Button>
              </Link>
              <Button typeSchema="cartButton">Сheckout</Button>
            </div>
          </div>
        </main>
      )}
    </ShoppingCartContext.Consumer>
  );
};
