import styles from './PageNotFound.module.scss';
import { history, ROUTES } from '../../../router';

export const PageNotFound = () => (
  <div className={styles.background} onClick={() => history.push(ROUTES.Auth.Home)}>
    PAGE NOT FOUND
  </div>
);
