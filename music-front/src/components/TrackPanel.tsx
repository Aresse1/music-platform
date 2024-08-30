import styles from "./styles/TrackPanel.module.css"
import { useState } from "react"
import { useRef } from "react"
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import Repeat from "./UI/icons/Repeat&Shuffle/Repeat";
import Mute from "./UI/icons/Volume/Mute";
import LowVolume from "./UI/icons/Volume/LowVolume";
import MediumVolume from "./UI/icons/Volume/MediumVolume";
import MaxVolume from "./UI/icons/Volume/MaxVolume";
import NoneRepeat from "./UI/icons/Repeat&Shuffle/NoneRepeat";
import Play from "./UI/icons/Play&Pause/Play";
import Pause from "./UI/icons/Play&Pause/Pause";
import Shuffle from "./UI/icons/Repeat&Shuffle/Shuffle";
import Prev from "./UI/icons/Prev&Next/Prev";
import Next from "./UI/icons/Prev&Next/Next";


const TrackPanel = () => {
const track = useSelector((state: RootState) => state.track.track)
const apiUrl = import.meta.env.VITE_APP_API
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const [volume, setVolume] = useState(50);
const [isLooping, setIsLooping] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef<HTMLAudioElement | null>(null);
const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const newVolume = Number(e.target.value);

setVolume(newVolume);
  if (audioRef.current) {
    audioRef.current.volume = newVolume / 100;
  }
};

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

const handlePlayPause = () => {
if (audioRef.current) {

  if (isPlaying) {
    console.log(audioRef.current)
    audioRef.current.pause();
    setIsPlaying(false);
  } else {
    audioRef.current.play();
    setIsPlaying(true);
    }
  }
};

const handleRepeat = () => {
  if (audioRef.current) {
    audioRef.current.loop = !audioRef.current.loop;
    setIsLooping(audioRef.current.loop);
  }
};



return (

<div className={styles.panel}>

  <img className={styles.picture} src={apiUrl + track.picture} alt={track.name} />

  <div className={styles.item__container}>
      <h3 className={styles.item}>{track.name}</h3>
      <h3 className={styles.item2}>{track.artist}</h3>
  </div>

  <audio 
      autoPlay={true}
      ref={audioRef} 
      src={apiUrl + track.audio}
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleLoadedMetadata}/>

  <div className={styles.time_container}>
    <div className={styles.controls}>
      <span onClick={handleRepeat}>
        <Shuffle  fill={isLooping ? "#D9D9D9" : "#9B9B9B"} />
      </span>
      <button className={styles.button}>
        <Prev/>
      </button>
      <button className={styles.button} onClick={handlePlayPause} >
        {isPlaying ? 
        <Play/> : 
        <Pause/>}
      </button>
      <button className={styles.button}>
        <Next/>
      </button>
      <span  >
        {isLooping ? (<Repeat/>) 
        : (<NoneRepeat/>)}
      </span>
    </div>
    {/* <span className={styles.current_time}>{formatTime(currentTime)}</span> */}
    <input
      className={styles.seekbar}
      type="range"
      min="0"
      max={duration}
      value={currentTime}
      onChange={handleSeek}/>
    {/* <span className="duration">{formatTime(duration)}</span> */}
  </div>
  <span className={styles.volume_icon}>
    { volume === 0 ?(<Mute/>)
    : volume <= 20 ? (<LowVolume/>)
    : volume <=60 ?(<MediumVolume/>)
    :(<MaxVolume/>)
      }
  </span>
  <div className={styles.volume_control}>
    <input
      type="range"
      id="volume"
      min="0"
      max="100"
      value={volume}
      onChange={handleVolumeChange}
    />
  </div>
</div> 
)

}
// function formatTime(time: number) {
// const minutes = Math.floor(time / 60);
// const seconds = Math.floor(time % 60);
// return `${minutes}:${seconds.toString().padStart(2, '0')}`;
// }
export {TrackPanel}