import React from 'react';

const VolumeSlider = ({ volume, setVolume }) => {
  return (
    <div>
      <label className="form-label">Volume</label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="form-range"
      />
    </div>
  );
};

export default VolumeSlider;