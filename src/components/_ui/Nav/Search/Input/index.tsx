import { useState } from "react"

export const Input = ({search, setSearch}:any) => { 
    return (
        <input onChange={(v) => setSearch(v.target.value)} placeholder="Pesquisar" type="search" name="" id=""  value={search}/>  
    )
}