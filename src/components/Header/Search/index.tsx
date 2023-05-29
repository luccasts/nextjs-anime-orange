"use client"
import { BsSearch, BsX } from "react-icons/bs";
import styles from "./page.module.scss"
import { useState } from "react";

export const Search = () => {
    const [handleInput, setHandleInput] = useState<Boolean>()
    function handleClick () {
        if(handleInput == false  || handleInput == undefined){
            setHandleInput(true) 
        }else {
            setHandleInput(false)
        }
    }
    return (
        <form className={styles.input} >
            {handleInput 
            ?
            <>
                <input placeholder="Buscar" type="search" name="" id="" /> 
                <BsX className={styles.BsX}  onClick={ () => handleClick()} />
            </> 
            :  
            <>
            <BsSearch className={styles.BsSearch} onClick={ () => handleClick()}/>
            </> }
            
        </form>
    )   
}