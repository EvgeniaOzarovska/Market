import styles from './Search.module.scss';
import { Button } from '../../../../components/Button';
import { useState } from 'react';
import { Info } from '../../../../components/Info';
import { ErrorMessages } from '../../../../constants/messages';
import { HardCoddedData } from '../../../../data/data';

export const Search = props => {
  const { limit = 25, onSearch, currentCategory } = props;
  const [value, setValue] = useState('');

  const searchFunction = event => {
    setValue(event.target.value);
  };

  const search = () => {
    const trimmedText = value.trim().toLowerCase();
    if (value === '') {
      return onSearch(HardCoddedData[currentCategory]);
    } else {
      const newList = HardCoddedData[currentCategory].filter(
        item =>
          item.name.toLowerCase().includes(trimmedText) ||
          item.description.toLowerCase().includes(trimmedText),
      );
      onSearch(newList);
    }
  };

  return (
    <div>
      <div className={styles.search_block}>
        <input
          value={value}
          onChange={searchFunction}
          onKeyDown={event => event.key === 'Enter' && search()}
          className={styles.input}
        />
        <Button disabled={value.length > limit} onClick={search}>
          Search
        </Button>
      </div>
      <div className={styles.blockWithError}>
        {value.length > limit && <Info>{ErrorMessages.errorSearch}</Info>}
      </div>
    </div>
  );
};
