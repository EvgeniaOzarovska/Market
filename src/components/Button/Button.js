import merge from 'classnames';
import styles from './Button.module.scss';

export const Button = (props) => {
  return <button type="button" {...props} className={merge(styles.button, props.className)}>
    {props.children}
  </button>
};