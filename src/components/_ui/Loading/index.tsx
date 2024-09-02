"use client"

import handleSWR from "services/handleSWR"
import styles from "./page.module.scss"
export default function Loading():any {
    const { error, isLoading } = handleSWR()
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