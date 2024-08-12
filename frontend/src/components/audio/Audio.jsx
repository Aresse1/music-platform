import { MdPlayArrow, MdPause } from "react-icons/md";
import IconButton from "./components/IconButton";
import VolumeInput from "./components/VolumeInput";
import * as React from "react";

export default function AudioPlayer(props) {
  /** truncated */

  // states
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(0.2); // set to 0.2, max is 1.0

  const handleVolumeChange = (volumeValue) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-400 p-3 relative">
      <audio
        ref={audioRef}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
          setIsReady(true);
        }}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source type="audio/mpeg" src={currentSong.src} />
      </audio>
      <div className="text-center mb-1">
        <p className="text-slate-300 font-bold">
          {currentSong?.title ?? "Select a song"}
        </p>
        <p className="text-xs">Singer Name</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center mt-4">
        <div className="flex items-center gap-3 justify-self-center">
          <IconButton
            disabled={!isReady}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            size="lg"
          >
            {!isReady && currentSong ? (
              <CgSpinner size={24} className="animate-spin" />
            ) : isPlaying ? (
              <MdPause size={30} />
            ) : (
              <MdPlayArrow size={30} />
            )}
          </IconButton>
        </div>
        <div className="flex gap-3 items-center md:justify-self-end">
          <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
}