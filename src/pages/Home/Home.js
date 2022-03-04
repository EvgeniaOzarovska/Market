import { Header } from '../../components/Header';
import { LogoText } from '../../components/LogoText';
import { Page } from '../../components/Page';
import { Icon } from '../../components/Icon';
import { Sidebar } from '../../components/Sidebar';
import { Category } from '../../components/Category';
import ShoppingCartIcon from './images/icons/shopping_cart.svg'
import Product from './images/icons/image_placeholder.png'
import { Footer } from "../../components/Footer";
import styles from './Home.module.scss'
import { ItemCard } from "../../components/ItemCard";
import { Button } from "../../components/Button";
import { Search } from "../../components/Search";

export const Home = () => {
  return (
    <Page>

      <Header>
        <LogoText />
        <Search/>
        <Icon alt='shopping cart' src={ShoppingCartIcon} />
      </Header>

      <div className={styles.section}>
        <Sidebar>
        <Category>Smartphone</Category>
        <Category>Furniture</Category>
        <Category>Fitness Equipment</Category>
        <Category>Sanitary ware</Category>
        <Category>Watch</Category>
      </Sidebar>
      </div>

        <div className={styles.product_block}>
        <div className={styles.productCard}>
          <ItemCard alt='card' src={Product}/>
          <Button>Buy</Button>
        </div>
        <div className={styles.productCard}>
          <ItemCard alt='card' src={Product} />
          <Button>Buy</Button>
        </div>
        <div className={styles.productCard}>
          <ItemCard alt='card' src={Product}/>
          <Button>Buy</Button>
        </div>
        <div className={styles.productCard}>
          <ItemCard alt='card' src={Product}/>
          <Button>Buy</Button>
        </div>
        <div className={styles.productCard}>
          <ItemCard alt='card' src={Product}/>
          <Button>Buy</Button>
        </div>
        <div className={styles.productCard}>
          <ItemCard alt='card' src={Product}/>
          <Button>Buy</Button>
        </div>
          <div className={styles.productCard}>
            <ItemCard alt='card' src={Product}/>
            <Button>Buy</Button>
          </div>
          <div className={styles.productCard}>
            <ItemCard alt='card' src={Product}/>
            <Button>Buy</Button>
          </div>
          <div className={styles.productCard}>
            <ItemCard alt='card' src={Product}/>
            <Button>Buy</Button>
          </div>
          <div className={styles.productCard}>
            <ItemCard alt='card' src={Product}/>
            <Button>Buy</Button>
          </div>
          <div className={styles.productCard}>
            <ItemCard alt='card' src={Product}/>
            <Button>Buy</Button>
          </div>
          <div className={styles.productCard}>
            <ItemCard alt='card' src={Product}/>
            <Button>Buy</Button>
          </div>
      </div>

      <Footer>
        <LogoText className={styles.logo}/>
      </Footer>

    </Page>
  );
};
