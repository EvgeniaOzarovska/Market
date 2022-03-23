import styles from './Page.module.scss';
import merge from 'classnames';
export const Page = props => {
  return <div className={merge(styles.container, props.className)}>{props.children}</div>;
};
