import styles from './LogoText.module.scss';
import merge from 'classnames';

export const LogoText = (...props) => {
    return <h1 className={merge(styles.h1, props.className )}>Market</h1>;
};