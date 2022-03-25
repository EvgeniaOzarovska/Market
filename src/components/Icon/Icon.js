import styles from './Icon.module.scss';
import merge from 'classnames';

export const Icon = props => {
  return <img alt={props.name} src={props.src} className={merge(styles.icon, props.className)} />;
};
