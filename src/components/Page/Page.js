import styles from './Page.module.scss'
export const Page = (props) => {
    return <div {...props} className={(styles.container, props.className)}>
        {props.children}
    </div>
}