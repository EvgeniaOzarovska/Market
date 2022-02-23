import styles from './Category.module.scss'
export const Category =(props) => {
    return <a className={styles.link} href={props.children}> {props.children}</a>
}