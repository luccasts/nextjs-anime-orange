"use client"
import { BsSearch, BsX } from "react-icons/bs";
import styles from "./page.module.scss"
import { FormEvent, useState } from "react";
import { Input } from "./Input";

export const Search = () => {
    const [input, setInput] = useState<Boolean>()
    const [search, setSearch] = useState('')
    function handleClick() {
        if (input == false || input == undefined) {
            setInput(true)
        } else {
            setInput(false)
        }
    }
    function handleIDSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (search.length >= 3) {
            window.location.pathname = `/search/${search}`
        }
    }
    return (
        <form onSubmit={(e) => handleIDSearch(e)} className={styles.input} >
            {input
                ?
                <>
                    <button className={styles.BbButton}>
                        <BsSearch className={styles.BsLeftSearch} />
                    </button>
                    <Input search={search} setSearch={setSearch} />
                    <BsX className={styles.BsX} onClick={() => handleClick()} />
                </>
                :
                <>
                    <BsSearch className={styles.BsSearch} onClick={() => handleClick()} />
                </>}

        </form>
    )
}