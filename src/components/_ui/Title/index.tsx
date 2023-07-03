import styles from  './page.module.scss'
interface Ititle{
    title:string
}

export const Title = ({title}:Ititle) => {
    return (
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
    )
}