import  styles from './Footer.module.scss'
import { LogoText } from "../LogoText";
export const Footer = () => {
    return <div className={styles.footer}>
        <LogoText/>
    </div>
}