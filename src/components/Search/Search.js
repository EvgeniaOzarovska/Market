import merge from 'classnames';
import styles from './Search.module.scss';

export const Search = (props) => {
  return (
    <input type="search" placeholder='Search' {...props} className={merge(styles.input, props.className)} />
  );
};
