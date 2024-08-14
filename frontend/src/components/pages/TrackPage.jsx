import axios from "axios"
import styles from "../styles/TrackPage.module.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import DeleteTrack from "../UI/DeleteTrack"
import AudioPlayer from "../audio/AudioPlayer"


const TrackPage = () => {
const [track, setTrack] = useState("")
const { id } = useParams()
const apiUrl = "http://localhost:5000/"


useEffect(() => {
const fetchAudio = async () => {
    const response = await axios.get(`${apiUrl}tracks/${id}`)
    setTrack(response.data);
}
fetchAudio()
},[])




return (

    <div className={styles.container}>
        
    
     <img className={styles.picture} src={track.picture} />
        <div className={styles.item__container}>
            <p className={styles.item}>{track.name}</p>
            <p className={styles.item}>{track.artist}</p>
            <p className={styles.item}>{track.text}</p>
            <audio className={styles.item} controls src={`${apiUrl}${track.audio}`}></audio>
        </div>
        <DeleteTrack />
    </div> 
    
)
}

export {TrackPage}