import axios  from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Track } from "../Track"
import { Ttrack } from "../../types/"

const SearchPage = () => {
    const [sortedTracks, setSortedTracks] = useState<Ttrack[]>([])
    
    const { id } = useParams()

    const getTracks = async() => {
        const response = await axios.get("http://localhost:5000/tracks/")
        handleSearch(response.data)
    }

    const handleSearch = (tracks: Ttrack[]) => {
        let sortedTracks = []
        for (let track of tracks) {
            console.log(track)
            if (id !== undefined) {
                if (track.name.toLowerCase().includes(id.toLowerCase()) ) {
                    sortedTracks.push(track)
                }
            }
        }
        console.log(sortedTracks)
        setSortedTracks(sortedTracks)
    }
    
    useEffect(() => {
        getTracks()
        
    }, [])
    

    return(
        <div>
             {sortedTracks.map((track) => (
                <Track 
                key={track._id}
                id={track._id}
                name={track.name}
                artist={track.artist}
                text={track.text}
                picture={track.picture}
                />
            ))}
        </div>
    )
}

export {SearchPage}