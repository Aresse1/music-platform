import styles from "./styles/TrackPanel.module.css"
import { useState } from "react"
import { useRef } from "react"
import { Ttrack } from "../types/"


const TrackPanel = (props: Ttrack) => {

const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);

const handleTimeUpdate = () => {
  if (audioRef.current) {
    setCurrentTime(audioRef.current.currentTime);
  }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newValue = Number(e.target.value);
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef<HTMLAudioElement | null>(null);

const handlePlayPause = () => {
  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
};



return (

    <div className={styles.panel}>
        {/* <BackButton>❮</BackButton> */}
        <img className={styles.picture} src={props.picture} alt={props.name} />
        <div className={styles.item__container}>
            <h3 className={styles.item}>{props.name}</h3>
            <h3 className={styles.item2}>{props.artist}</h3>
        </div>
        <audio 
            ref={audioRef} 
            src={props.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}/>
        <div className={styles.time_container}>
          <span className={styles.current_time}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <span className="duration">{formatTime(duration)}</span>
        </div>
        <button className={styles.button} onClick={handlePlayPause}>
            {isPlaying ? 
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26Z" fill="#D9D9D9"/>
                <path d="M29 18C29 16.8954 29.8954 16 31 16C32.1046 16 33 16.8954 33 18V34C33 35.1046 32.1046 36 31 36C29.8954 36 29 35.1046 29 34V18Z" fill="black"/>
                <path d="M19 18C19 16.8954 19.8954 16 21 16C22.1046 16 23 16.8954 23 18V34C23 35.1046 22.1046 36 21 36C19.8954 36 19 35.1046 19 34V18Z" fill="black"/>
            </svg> : 
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26Z" fill="#D9D9D9"/>
                <path d="M36 24.2679C37.3333 25.0377 37.3333 26.9623 36 27.7321L22.5 35.5263C21.1667 36.2961 19.5 35.3338 19.5 33.7942V18.2058C19.5 16.6662 21.1667 15.7039 22.5 16.4737L36 24.2679Z" fill="#110303"/>
            </svg>}
      </button>
    </div> 
    )
}
function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
export {TrackPanel}