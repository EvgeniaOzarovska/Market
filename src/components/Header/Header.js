import styles from './Header.module.scss';
import ShoppingCartIcon from '../Icon/shopping_cart.svg';
import { LogoText } from '../LogoText';
import { Link } from 'react-router-dom';
import { Routes } from '../../router';
import { Icon } from '../Icon';
export const Header = () => {
  return (
    <header className={styles.header}>
      <LogoText />
      <div className={styles.reg_section}>
        <Link to={Routes.Auth.Login} className={styles.link}>
          Sign In
        </Link>
        <Link to={Routes.Auth.Reg} className={styles.link}>
          Sign Up
        </Link>
      </div>
      <Icon colorSchema="icon" alt="shopping cart" src={ShoppingCartIcon} />
    </header>
  );
};
