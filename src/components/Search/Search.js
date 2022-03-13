import merge from 'classnames';
import styles from './Search.module.scss'
import { Button } from "../Button";

export const Search = (props) => {
  return (
    <input type="search" placeholder='Search' {...props} className={merge(styles.input, props.className)} />
  )
}