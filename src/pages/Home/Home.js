import { HardCoddedData } from '../../data/data';
import { useState } from 'react';
import { Page } from '../../components/Page';
import { Sidebar } from '../../components/Sidebar';
import { Category } from '../../components/Category';
import { ItemCard } from '../../components/ItemCard';
import { Button } from '../../components/Button';
import styles from './Home.module.scss';

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

  const renderCategory=()=>{
    return HardCoddedData.categories.map((item, index) => {
      return(
        <Category
          onClick={() => {
            setList(HardCoddedData[item.key]);
          }}
        >
          {item.name}
        </Category>
      )
    })
  }
  return (
    <Page>
      <div className={styles.section}>
        <Sidebar>
          {renderCategory()}
        </Sidebar>
      </div>
      <div className={styles.product_block}>{renderData()}</div>
    </Page>
  );
};
