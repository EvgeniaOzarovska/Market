import styles from './Header.module.scss';
import { LogoText } from "../LogoText";
import { Link } from "react-router-dom";
import { Routes } from "../../router";
import { Icon } from "../Icon";
import ShoppingCartIcon from "../Icon/shopping_cart.svg";
export const Header = () => {
  return <div className={styles.header}>  <LogoText />
    <div className={styles.reg_section}>
      <Link to={Routes.Auth.Login} className={styles.link}>Sign In</Link>
      <Link to={Routes.Auth.Reg} className={styles.link}>Sign Up</Link>
    </div>
    <Link to={Routes.Auth.Card}>
      <Icon alt="shopping cart" src={ShoppingCartIcon} />
    </Link> </div>;
};
