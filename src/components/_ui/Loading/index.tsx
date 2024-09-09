"use client"
import styles from "./page.module.scss"
import getAnimes from "services/getAnimes"
export default function Loading():any {
    const { error, isLoading }:any = getAnimes()
    if (error) return (
        <div>
            Ocorreu o erro {error}.
        </div>
    )
    if (isLoading) return (
        <div className={styles.loading}> <img src="http://localhost:3000/favicon.ico" alt="" />
        </div>
    );

}