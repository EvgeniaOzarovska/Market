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

  const search = text => {
    const trimmedText = text.trim().toLowerCase();
    if (text === '') {
      return setList(HardCoddedData[category]);
    } else {
      const newList = HardCoddedData[category].filter(
        item =>
          item.name.toLowerCase().includes(trimmedText) ||
          item.description.toLowerCase().includes(trimmedText),
      );
      setList(newList);
    }
  };

  return (
    <main className={styles.container}>
      <Sidebar setValue={setData} />
      <Page>
        <Search onSearch={search} />
        {list.length > 0 ? (
          <ProductBlock className={styles.product_block} productList={list} />
        ) : (
          <Info className={styles.message}>{ErrorMessages.recordsNotFound}</Info>
        )}
      </Page>
    </main>
  );
};
