import { HardCoddedData } from '../../data/data';
import { useState } from 'react';
import { Sidebar } from './componentsHome/Sidebar';
import styles from './Home.module.scss';
import { Search } from './componentsHome/Search';
import { Page } from '../../components/Page';
import { ErrorMessages } from '../../constants/messages';
import { Info } from '../../components/Info';
import { ProductBlock } from './componentsHome/ProductBlock';

export const Home = () => {
  const [list, setList] = useState(HardCoddedData.smartphone);
  const [category, setCategory] = useState('smartphone');

  const setData = item => {
    setList(HardCoddedData[item.key]);
    setCategory(item.key);
  };

  const searchResult = newList => setList(newList);

  return (
    <main className={styles.container}>
      <Sidebar setValue={setData} />
      <Page>
        <Search onSearch={searchResult} currentCategory={category} />
        {list.length > 0 ? (
          <ProductBlock className={styles.product_block} productList={list} />
        ) : (
          <Info className={styles.message}>{ErrorMessages.recordsNotFound}</Info>
        )}
      </Page>
    </main>
  );
};
