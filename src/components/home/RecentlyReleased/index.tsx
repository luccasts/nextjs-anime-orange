"use client"
import EpsList from "components/_ui/EpsList";
import getAnimes from "services/getAnimes";

export default function RecentlyReleased() {
    const {data, error, isLoading} = getAnimes()
    
    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    return (
        <EpsList data={data}/>
    )
}