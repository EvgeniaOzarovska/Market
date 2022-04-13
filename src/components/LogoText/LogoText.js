import styles from './LogoText.module.scss';
import merge from 'classnames';

export const LogoText = props => {
  return <div className={merge(styles.h1, props.className)}>Market</div>;
};
