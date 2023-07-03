import { useEffect, useState } from "react"

export const Input = () => {
    
    const [handleSearch, setHandleSearch] = useState('')
    useEffect(
        () => {

        }
    )
    return (
        <input onChange={(v) => setHandleSearch(v.target.value)} placeholder="Buscar" type="search" name="" id=""  value={handleSearch}/>  
    )
}