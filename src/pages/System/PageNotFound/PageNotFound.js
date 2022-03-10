import styles from './PageNotFound.module.scss';
import { history, Routes } from '../../../router';

export const PageNotFound = () => (
  <div className={styles.background} onClick={() => history.push(Routes.Auth.Home)}>
    PAGE NOT FOUND
  </div>
);
