import styles from './ShoppingCart.module.scss';
import { OrderCart } from './componentsCart/OrderCart';
import { Button } from '../../components/CommonComponents';
import { Link } from 'react-router-dom';
import { Routes } from '../../router';
import { Page } from '../../components/CommonComponents';
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
            return <OrderCart key={cartItem.id} card={cartItem} />;
          })
        ) : (
          <Info className={styles.message}>{ErrorMessages.emptyShoppingCart}</Info>
        )}
        {data.length > 0 ? (
          <div className={styles.btnBlock}>
            Total amount: {calculateAmountPrice(data)} UAH
            <Link to={Routes.Auth.Home}>
              <Button cartstyle>Сontinue shopping</Button>
            </Link>
            <Button cartstyle>Сheckout</Button>
          </div>
        ) : (
          <Link to={Routes.Auth.Home} className={styles.emptyStyle}>
            <Button cartstyle>Сontinue shopping</Button>
          </Link>
        )}
      </Page>
    </main>
  );
};
