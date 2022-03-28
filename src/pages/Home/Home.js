import { HardCoddedData } from '../../data/data';
import { useState } from 'react';
import { Sidebar } from './componentsHome/Sidebar';
import { Category } from './componentsHome/Category';
import { ItemCard } from './componentsHome/ItemCard';
import styles from './Home.module.scss';
import { Search } from './componentsHome/Search';
import { Page } from '../../components/Page';
import { ErrorMessages } from '../../constants/messages';
import { Info } from '../../components/Info';
import { ProductBlock } from './componentsHome/ProductBlock';

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
          <ProductBlock className={styles.product_block}>{renderData()}</ProductBlock>
        ) : (
          <Info className={styles.message}>{ErrorMessages.recordsNotFound}</Info>
        )}
      </Page>
    </main>
  );
};
