import styles from './Category.module.scss';
export const Category = props => {
  return (
    <a {...props} className={styles.link}>
      {' '}
      {props.children}
    </a>
  );
};
