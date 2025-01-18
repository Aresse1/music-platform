import styles from "./styles/TrackPanel.module.css";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Repeat from "./UI/icons/Repeat&Shuffle/Repeat";
import Mute from "./UI/icons/Volume/Mute";
import LowVolume from "./UI/icons/Volume/LowVolume";
import MediumVolume from "./UI/icons/Volume/MediumVolume";
import MaxVolume from "./UI/icons/Volume/MaxVolume";
import NoneRepeat from "./UI/icons/Repeat&Shuffle/NoneRepeat";
import Play from "./UI/icons/Play&Pause/Play";
import Pause from "./UI/icons/Play&Pause/Pause";
import Liked from "./UI/icons/Liked/Liked";
import Prev from "./UI/icons/Prev&Next/Prev";
import Next from "./UI/icons/Prev&Next/Next";
import Back from "./UI/icons/HeaderPhone/Back";
import NoneLiked from "./UI/icons/Liked/NoneLiked";

interface TrackPanelProps {
  isVisible: boolean;
  onClose: () => void;
}
const TrackPanel: React.FC<TrackPanelProps> = ({ isVisible, onClose }) => {
  const track = useSelector((state: RootState) => state.track.track);
  const apiUrl = import.meta.env.VITE_APP_API;
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(30);
  const [isLooping, setIsLooping] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
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
    <div className={`${styles.panel} ${isVisible ? styles.visible : styles.hidden}`}>
      <div onClick={onClose}><Back/></div>
      <img className={styles.picture} src={apiUrl + track.picture} alt={track.name} />
      <div className={styles.item_container}>
        <p className={styles.item}>{track.name}</p>
        <p className={styles.item2}>{track.artist}</p>
      </div>
        <audio
          autoPlay={true}
          ref={audioRef}
          src={apiUrl + track.audio}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      <div className={styles.control_container}>
        <div className={styles.controls}>
          <span onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? <Liked /> : <NoneLiked />}
          </span>
          <button className={styles.button}><Prev /></button>
          <button className={styles.button_play} onClick={handlePlayPause}>
            {audioRef.current && !audioRef.current.paused ? <Play /> : <Pause />}
          </button>
          <button className={styles.button}><Next /></button>
          <span onClick={handleRepeat}>
            {isLooping ? <Repeat /> : <NoneRepeat />}
          </span>
        </div>
        <div className={styles.volume_control}>
          <span className={styles.volume_icon}>
            {volume === 0 ? <Mute /> : volume <= 30 ? <LowVolume /> : volume <= 70 ? <MediumVolume /> : <MaxVolume />}
          </span>
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
      <input
          className={styles.seekbar}
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
    </div>
  );
};

export { TrackPanel };
