import styles from './Search.module.scss';
import { Button } from '../../../../components/Button';
import { useState } from 'react';
import { Info } from '../../../../components/Info';
import { ErrorMessages } from '../../../../constants/messages';

export const Search = props => {
  const { limit = 25, onSearch } = props;
  const [value, setValue] = useState('');

  const SearchFunction = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form
        className={styles.search_block}
        onSubmit={event => {
          event.preventDefault();
          onSearch(value);
        }}
      >
        <input value={value} onChange={SearchFunction} className={styles.input} />
        <Button disabled={value.length > limit} type="submit">
          Search
        </Button>
      </form>
      <div className={styles.blockWithError}>
        {value.length > limit && <Info>{ErrorMessages.errorSearch}</Info>}
      </div>
    </div>
  );
};
