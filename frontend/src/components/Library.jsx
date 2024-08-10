import React, { useEffect, useState } from "react"
import {Track} from "./Track"
import axios from "axios"


const Library = () => {
    const [tracks, setTracks] = useState([])

    const fetchTracks = async () => {
        const response = await axios.get("http://localhost:5000/tracks/")
        setTracks(response.data)
    };

    useEffect(() => {
         fetchTracks()
    }, [])
        
    return (
        <div className="library">
           {tracks.map((track) => (
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

export default Library