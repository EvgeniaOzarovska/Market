import  styles from './Footer.module.scss'
export const Footer = (props) => {
    return <div className={styles.footer}>
        {props.children}
    </div>
}