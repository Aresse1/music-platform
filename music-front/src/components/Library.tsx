import { useEffect, useState } from "react"
import { Track } from "./Track"
import axios from "axios"
import { Ttrack } from "../types/"
import styles from "./styles/Library.module.css"


const Library = () => {
    const [tracks, setTracks] = useState<Ttrack[]>([])
    const apiUrl = import.meta.env.VITE_APP_API
    const fetchTracks = async () => {
        const response = await axios.get(apiUrl + "tracks")
        setTracks(response.data)
        console.log(response.data)
    };

    useEffect(() => {
         fetchTracks()
    }, [])
        
    return (
        <div className={styles.container}>
           {tracks.map((track) => (
                <Track 
                key={track.id}
                id={track.id}
                name={track.name}
                artist={track.artist}
                text={track.text}
                picture={track.picture}
                audio={track.audio} 
                />
            ))}
        </div>
    )
}

export default Library