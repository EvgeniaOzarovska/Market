import { HardCoddedData } from '../../data/data';
import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Category } from '../../components/Category';
import { ItemCard } from '../../components/ItemCard';
import styles from './Home.module.scss';
import { Search } from '../../components/Search';
import { Page } from '../../components/Page';
import { Button } from '../../components/Button';

export const Home = () => {
  const [list, setList] = useState(HardCoddedData.smartphone);
  const [category, setCategory] = useState('smartphone');
  const [text, setText] = useState('');

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

  const renderCategory = () => {
    return HardCoddedData.categories.map((item, index) => {
      return (
        <Category
          onClick={() => {
            setList(HardCoddedData[item.key]);
            setCategory(item.key);
          }}
        >
          {item.name}
        </Category>
      );
    });
  };

  const search = () => {
    if (text === '') {
      setList(HardCoddedData[category]);
    } else {
      const newList = HardCoddedData[category].filter(items =>
        items.name.toLowerCase().includes(text.toLowerCase()),
      );
      setList(newList);
    }
  };

  return (
    <main className={styles.container}>
      <Sidebar>{renderCategory()}</Sidebar>
      <Page>
        <div className={styles.search_block}>
          <Search
            onChange={event => {
              event.preventDefault();
              setText(event.target.value);
            }}
          />
          <Button
            onClick={event => {
              event.preventDefault();
              search();
            }}
          >
            Search
          </Button>
        </div>
        <div className={styles.product_block}>{renderData()}</div>
      </Page>
    </main>
  );
};
