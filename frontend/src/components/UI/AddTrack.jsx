import React, { useState } from 'react'

const AddTrack = () => {
    const [name , setName] = useState('')
    const [artist, setArtist] = useState('')
    const [text, setText] = useState('')
    const [picture, setPicture] =  useState(null)
    const [audio, setAudio] = useState(null)
    
    const handlePictureFile = (e) => {
        const pictureFile = e.target.files[0]
        if (pictureFile){
            setPicture(pictureFile)
        }
    }

    const handleAudioFile = (e) => {
        const audioFile = e.target.files[0]
        if (audioFile){
            setAudio(audioFile)
        }
    }


    const handleSubmit = async() => {
        const formData = new FormData()
        formData.append('name', name);
        formData.append('artist', artist);
        formData.append('text', text);
        formData.append('picture', picture)
        formData.append('audio', audio)
        const response = await fetch('http://localhost:5000/tracks', {
            method: 'POST',
            body: formData
        })
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
            <input
            type="file"
            placeholder="Picture"
            onChange={handlePictureFile}
            
            />
            <input
            type="file"
            placeholder="Audio"
            onChange={handleAudioFile}
            
            />
            <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}


export default AddTrack