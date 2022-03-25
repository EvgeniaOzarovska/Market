import { HardCoddedData } from '../../data/data';
import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Category } from '../../components/Category';
import { ItemCard } from '../../components/ItemCard';
import styles from './Home.module.scss';
import { Search } from '../../components/Search';
import { Page } from '../../components/Page';
import { ErrorMessages } from '../../constants/messages';
import { Info } from '../../components/Info';

export const Home = () => {
  const [list, setList] = useState(HardCoddedData.smartphone);
  const [category, setCategory] = useState('smartphone');

  const renderData = () => {
    return list.map((item, index) => {
      return (
        <div key={index} className={styles.productCard}>
          <ItemCard
            pic={item.pic}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        </div>
      );
    });
  };
  const setData = item => {
    setList(HardCoddedData[item.key]);
    setCategory(item.key);
  };

  const renderCategory = () => {
    return HardCoddedData.categories.map(item => {
      return (
        <Category key={item.key} onClick={() => setData(item)}>
          {item.name}
        </Category>
      );
    });
  };

  const search = text => {
    if (text === '') {
      return setList(HardCoddedData[category]);
    } else {
      const newList = HardCoddedData[category].filter(
        items =>
          items.name.toLowerCase().includes(text.trim().toLowerCase()) ||
          items.description.toLowerCase().includes(text.trim().toLowerCase()),
      );
      setList(newList);
    }
  };

  return (
    <main className={styles.container}>
      <Sidebar>{renderCategory()}</Sidebar>
      <Page>
        <Search onSearch={search} />
        {list.length > 0 ? (
          <Info className={styles.product_block}>{renderData()}</Info>
        ) : (
          <Info className={styles.message}>{ErrorMessages.recordsNotFound}</Info>
        )}
      </Page>
    </main>
  );
};
