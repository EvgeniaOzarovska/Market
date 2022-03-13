import  styles from './Footer.module.scss'
import { LogoText } from "../LogoText";
export const Footer = () => {
    return <footer className={styles.footer}>
        <LogoText/>
    </footer>
}