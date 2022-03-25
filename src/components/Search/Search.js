import styles from './Search.module.scss';
import { Button } from '../Button';
import { useState } from 'react';
import { Info } from '../Info';
import { ErrorMessages } from '../../constants/messages';

export const Search = props => {
  const { limit = 25, onSearch } = props;
  const [value, setValue] = useState('');
  return (
    <div className={styles.block}>
      <form
        className={styles.search_block}
        onSubmit={event => {
          event.preventDefault();
          onSearch(value);
        }}
      >
        <input
          value={value}
          maxLength={limit}
          onChange={event => {
            setValue(event.target.value.substring(0, limit));
            if (event.target.value.length === 0) {
              onSearch('');
            }
          }}
          className={styles.input}
        />
        <Button type="submit">Search</Button>
      </form>
      {value.length === limit && <Info>{ErrorMessages.errorSearch}</Info>}
    </div>
  );
};
