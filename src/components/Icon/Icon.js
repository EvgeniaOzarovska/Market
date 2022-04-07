import styles from './Icon.module.scss';
import merge from 'classnames';

export const Icon = ({ colorSchema = 'icon', className, children, ...props }) => {
  return (
    <img
      {...props}
      alt={props.name}
      src={props.src}
      className={merge(styles.icon, className, styles[colorSchema])}
    />
  );
};
