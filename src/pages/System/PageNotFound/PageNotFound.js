import styles from './PageNotFound.module.scss';
import { history, Routes } from '../../../router';

export const PageNotFound = () => (
  <div className={styles.background} onClick={() => history.push(Routes.Auth.Home)}>
   <p className={styles.text}>PAGE NOT FOUND</p>
  </div>
);
