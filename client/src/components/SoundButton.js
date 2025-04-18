import React, { useRef, useState, useEffect } from 'react';
import VolumeSlider from './VolumeSlider';

const SoundButton = ({ sound, globalVolume }) => {
  const audioRef = useRef(new Audio(sound.file));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = volume * globalVolume;

    return () => {
      audio.pause();
    };
  }, [volume, globalVolume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center p-4 m-2"
      onClick={togglePlay}
      style={{
        width: '250px',
        height: '180px',
        background: 'linear-gradient(145deg, #e4d3ff, #dec7ff)',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        userSelect: 'none',
      }}
    >
      <i
        className="bi bi-volume-up"
        style={{ fontSize: '2rem', color: '#6b4fbb' }}
      ></i>
      <div className="mt-2 fw-semibold" style={{ color: '#6b4fbb' }}>
        {sound.name}
      </div>
      <div className="mt-2 w-100">
        <VolumeSlider volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
};

export default SoundButton;
