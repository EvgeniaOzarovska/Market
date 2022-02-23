import styles from './Header.module.scss';
export const Header = props => {
  return <div className={styles.header}> {props.children} </div>;
};
