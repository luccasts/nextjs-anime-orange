import styles from "./page.module.scss"
export const Button = ({title}:any) => {
    return (
        <button className={styles.button}>{title}</button>
    )
}