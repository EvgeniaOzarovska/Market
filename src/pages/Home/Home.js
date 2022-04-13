import { HardCoddedData } from '../../data/data';
import React, { useState } from 'react';
import { Sidebar } from './componentsHome/Sidebar';
import styles from './Home.module.scss';
import { Search } from './componentsHome/Search';
import { Page } from '../../components/Page';
import { ErrorMessages } from '../../constants/messages';
import { Info } from '../../components/Info';
import { ItemCard } from './componentsHome/ItemCard';

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
          <div className={styles.product_block}>
            {list.map(item => (
              <ItemCard key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <Info className={styles.message}>{ErrorMessages.recordsNotFound}</Info>
        )}
      </Page>
    </main>
  );
};
