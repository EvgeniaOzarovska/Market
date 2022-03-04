import merge from 'classnames';
import styles from './Search.module.scss'

export const Search = (props) => {
  return <input type="text" placeholder='Search' {...props} className={merge(styles.input, props.className)} />
}