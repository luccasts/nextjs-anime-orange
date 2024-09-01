import { useEffect, useState } from "react"

export const Input = () => {
    
    const [search, setSearch] = useState('')
    
    return (
        <input onChange={(v) => setSearch(v.target.value)} placeholder="Pesquisar" type="search" name="" id=""  value={search}/>  
    )
}