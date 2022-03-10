import { Routes } from '../../router';
import { HardCoddedData } from '../../data/data';

import { useState } from 'react';
import { Header } from '../../components/Header';
import { LogoText } from '../../components/LogoText';
import { Page } from '../../components/Page';
import { Icon } from '../../components/Icon';
import { Sidebar } from '../../components/Sidebar';
import { Category } from '../../components/Category';
import { Footer } from '../../components/Footer';
import { ItemCard } from '../../components/ItemCard';
import { Button } from '../../components/Button';
import { Search } from '../../components/Search';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import ShoppingCartIcon from './images/icons/shopping_cart.svg';

export const Home = () => {
  const [list, setList] = useState(HardCoddedData.smartphone);

  const renderData = () => {
    return list.map((item, index) => {
      return (
        <div key={index} className={styles.productCard}>
          <p className={styles.title_product}>{item.name}</p>
          <ItemCard alt="card" src={item.pic} />
          <p className={styles.title_product}>{item.price} </p>
          <Button>Buy</Button>
        </div>
      );
    });
  };

  return (
    <Page>
      <Header>
        <LogoText />
        <Search />
        <Link to={Routes.Auth.Card}>
          <Icon alt="shopping cart" src={ShoppingCartIcon} />
        </Link>
      </Header>

      <div className={styles.section}>
        <Sidebar>
          <Category
            onClick={() => {
              setList(HardCoddedData.smartphone);
            }}
          >
            Smartphone
          </Category>
          <Category
            onClick={() => {
              setList(HardCoddedData.furniture);
            }}
          >
            Furniture
          </Category>
          <Category
            onClick={() => {
              setList(HardCoddedData.fitness_equipment);
            }}
          >
            Fitness Equipment
          </Category>
          <Category
            onClick={() => {
              setList(HardCoddedData.sanitary_ware);
            }}
          >
            Sanitary ware
          </Category>
          <Category
            onClick={() => {
              setList(HardCoddedData.watch);
            }}
          >
            Watch
          </Category>
        </Sidebar>
      </div>

      <div className={styles.product_block}>{renderData()}</div>

      <Footer>
        <LogoText />
      </Footer>
    </Page>
  );
};
