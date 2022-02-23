import styles from './Sidebar.module.scss'
export const Sidebar = (props) => {
    return <aside className={styles.sidebar}>{props.children}</aside>
}