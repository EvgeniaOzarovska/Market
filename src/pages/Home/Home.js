import { HardCoddedData } from '../../data/data';
import { useState } from 'react';
import { Page } from '../../components/Page';
import { Sidebar } from '../../components/Sidebar';
import { Category } from '../../components/Category';
import { ItemCard } from '../../components/ItemCard';
import styles from './Home.module.scss';
import { Search } from "../../components/Search";

export const Home = () => {
  const [list, setList] = useState(HardCoddedData.smartphone);

  const renderData = () => {
    return list.map((item, index) => {
      return (
        <div key={index} className={styles.productCard}>
            <ItemCard pic={item.pic} name={item.name} price={item.price}/>
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
        <Search/>
        <Sidebar>
          {renderCategory()}
        </Sidebar>
      </div>
      <div className={styles.product_block}>{renderData()}</div>
    </Page>
  );
};
