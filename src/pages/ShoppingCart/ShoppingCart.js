import styles from './ShoppingCart.module.scss';
import { OrderCart } from './componentsCart/OrderCart/OrderCart';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Routes } from '../../router';
import { ShoppingCartContext } from '../../providers/ShoppingCartProvider';
import { Page } from '../../components/Page';
import { Info } from '../../components/Info';
import { ErrorMessages } from '../../constants/messages';

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
          <Page className={styles.mainBlock}>
            {store.data.length > 0 ? (
              store.data.map(cartItem => {
                return <OrderCart card={cartItem} />;
              })
            ) : (
              <Info className={styles.message}>{ErrorMessages.emptyShoppingCart}</Info>
            )}
            {store.data.length > 0 ? (
              <div className={styles.btnBlock}>
                Total amount: {calculateAmountPrice(store.data)} UAH
                <Link to={Routes.Auth.Home}>
                  <Button typeSchema="cartButton">Сontinue shopping</Button>
                </Link>
                <Button typeSchema="cartButton">Сheckout</Button>
              </div>
            ) : (
              <Link to={Routes.Auth.Home} className={styles.emptyStyle}>
                <Button typeSchema="cartButton">Сontinue shopping</Button>
              </Link>
            )}
          </Page>
        </main>
      )}
    </ShoppingCartContext.Consumer>
  );
};
