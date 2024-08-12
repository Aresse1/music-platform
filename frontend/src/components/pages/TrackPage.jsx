import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Navigate } from 'react-router-dom'
import DeleteTrack from "../UI/DeleteTrack"



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

    if(track === null) {
        return <Navigate to="/library"/>
    }


    return (

        <div>
            <h1>{track.name}</h1>
            <h2>{track.artist}</h2>
            <h3>{track.text}</h3>
            <DeleteTrack />
            <audio controls src={`${apiUrl}${track.audio}`}></audio>
        </div>
    )
}

export {TrackPage}