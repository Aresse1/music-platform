import { useState } from 'react'
import { Link } from 'react-router-dom'

const AddTrack = () => {
    const [name , setName] = useState('')
    const [artist, setArtist] = useState('')
    const [text, setText] = useState('')
    const [picture, setPicture] =  useState<File | null>(null)
    const [audio, setAudio] = useState<File | null>(null)
    const apiUrl = import.meta.env.VITE_APP_API

    const handlePictureFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const pictureFiles = e.target.files
            if (pictureFiles){
                const pictureFile = pictureFiles[0]
            
            if(pictureFile){
                setPicture(pictureFile)
            }
        }
    }

    const handleAudioFile = (e : React.ChangeEvent<HTMLInputElement>) => {
        const audioFiles = e.target.files
            if (audioFiles) {
            const audioFile = audioFiles[0]
            
            if (audioFile){
                setAudio(audioFile)
            }
        }
    }

    const handleSubmit = async() => {
        const formData = new FormData()
        formData.append('name', name);
        formData.append('artist', artist);
        formData.append('text', text);
        if (picture) {
            formData.append('picture', picture)
          }
          if (audio) {
            formData.append('audio', audio)
          }
        await fetch(apiUrl + 'tracks', {
            method: 'POST',
            body: formData
        })
        window.location.reload()
    }
    
return (
    <div>
        <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        
        <input
        type="text"
        placeholder="Artist"
        onChange={(e) => setArtist(e.target.value)}
        value={artist}
        />

        <input
        type="text"
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        />
        <p>Picture</p>
        <input
        type="file"
        placeholder="Picture"
        onChange={handlePictureFile}
        />
        <p>Audio</p>
        <input
        type="file"
        placeholder="Audio"
        onChange={handleAudioFile}
        />

        <Link to="/library" onClick={handleSubmit}>Submit</Link>
    </div>
    )
}


export default AddTrack