import { Header } from '../../components/Header';
import { LogoText } from '../../components/LogoText';
import { Page } from '../../components/Page';
import { Icon } from '../../components/Icon';
import { Sidebar } from '../../components/Sidebar';
import { Category } from '../../components/Category';
import ShoppingCartIcon from './images/icons/shopping_cart.svg'
import Card from './images/icons/image_placeholder.png/'
import { Footer } from "../../components/Footer";
import styles from './Home.module.scss'
import { ItemCard } from "../../components/ItemCard";
import { Button } from "../../components/Button";

export const Home = () => {
  return (
    <Page>

      <Header>
        <LogoText />
        <Icon alt='shopping cart' src={ShoppingCartIcon} />
      </Header>

      <div className={styles.container}>

        <Sidebar>
        <Category>Smartphone</Category>
        <Category>Furniture</Category>
        <Category>Fitness Equipment</Category>
        <Category>Sanitary ware</Category>
        <Category>Watch</Category>
      </Sidebar>

        <div className={styles.section}>
          <ItemCard alt='card' src={Card}/>
          <Button>Buy</Button>
        </div>
      </div>
      <Footer>
        <LogoText className={styles.logo}/>
      </Footer>
    </Page>
  );
};
