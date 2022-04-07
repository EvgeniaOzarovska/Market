import merge from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ typeSchema = 'icon', className, children, ...props}) => {
  return (
    <button {...props} type="button" className={merge(styles.button, className, styles[typeSchema])}>
      {children}
    </button>
  );
};
