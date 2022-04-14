import styles from './ShoppingCart.module.scss';
import { OrderCart } from './componentsCart/OrderCart';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Routes } from '../../router';
import { Page } from '../../components/Page';
import { Info } from '../../components/Info';
import { ErrorMessages } from '../../constants/messages';
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../providers/ShopingCartProvider';

export const ShoppingCart = () => {
  const { state } = useContext(ShoppingCartContext);
  const { data } = state;
  const calculateAmountPrice = data => {
    return data.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  };

  return (
    <main className={styles.container}>
      <Page className={styles.mainBlock}>
        {data.length > 0 ? (
          data.map(cartItem => {
            return <OrderCart card={cartItem} />;
          })
        ) : (
          <Info className={styles.message}>{ErrorMessages.emptyShoppingCart}</Info>
        )}
        {data.length > 0 ? (
          <div className={styles.btnBlock}>
            Total amount: {calculateAmountPrice(data)} UAH
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
  );
};
