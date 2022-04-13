import styles from './Header.module.scss';
import ShoppingCartIcon from '../Icon/img/shopping_cart.svg';
import { Link } from 'react-router-dom';
import { Routes } from '../../router';
import { Icon } from '../Icon';
import { LogoText } from '../LogoText';
export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.marketLink} to={Routes.Auth.Home}>
        <LogoText />
      </Link>
      <div className={styles.headerBlock}>
        <div className={styles.reg_section}>
          <Link to={Routes.Auth.Login} className={styles.link}>
            Sign In
          </Link>
          <Link to={Routes.Auth.Reg} className={styles.link}>
            Sign Up
          </Link>
        </div>
        <Link to={Routes.Auth.ShoppingCart}>
          <Icon colorSchema="icon" alt="shopping cart" src={ShoppingCartIcon} />
        </Link>
      </div>
    </header>
  );
};
