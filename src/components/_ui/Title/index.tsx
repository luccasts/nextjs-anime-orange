import styles from './page.module.scss'


export const Title = ({ children } : any) => {
    return (
        <div className={styles.title}>
            {children}
        </div>
    )
}