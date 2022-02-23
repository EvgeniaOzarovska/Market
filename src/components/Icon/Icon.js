import styles from './Icon.module.scss'
import merge from 'classnames'
export const Icon =(props) => {
    return <img {...props}
      alt={props}
      className={merge(styles.icon, props.className)}
    />
}