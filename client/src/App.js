import React, { useState } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import SoundButton from './components/SoundButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const mockSounds = [
  { name: "Rain", category: "Nature", file: "/sounds/rain.mp3" },
  { name: "Forest", category: "Nature", file: "/sounds/forest.mp3" },
  { name: "Crackling Fire", category: "Objects", file: "/sounds/fire.mp3" },
  { name: "Ocean Waves", category: "Nature", file: "/sounds/waves.mp3" },
  { name: "Keyboard Typing", category: "Asmr", file: "/sounds/typing.mp3" },
  { name: "White Noise", category: "Ambience", file: "/sounds/white_noise.mp3" },
  { name: "Ribbon Box Tapping", category: "Objects", file: "/sounds/ribbon_tapping.mp3" },
  { name: "Cardboard Box Tapping", category: "Objects", file: "/sounds/cardboard_tapping.mp3" },
  { name: "Nail Tapping", category: "Asmr", file: "/sounds/nails.mp3" },
  { name: "Chewing", category: "Asmr", file: "/sounds/chewing.mp3" },
  { name: "Whispering", category: "Asmr", file: "/sounds/whispering.mp3" },
  { name: "Cat Meowing", category: "Animal", file: "/sounds/meow.mp3" },
  { name: "Driving Car", category: "City", file: "/sounds/driving_car.mp3" },
  { name: "Turning Pages", category: "Objects", file: "/sounds/turning_pages.mp3" },
  { name: "Traffic", category: "City", file: "/sounds/traffic.mp3" },
  { name: "Cafe", category: "Cozy", file: "/sounds/cafe.mp3" }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [globalVolume, setGlobalVolume] = useState(1); // 0 to 1

  const filteredSounds = selectedCategory === 'All'
    ? mockSounds
    : mockSounds.filter(sound => sound.category === selectedCategory);

  return (
    <div className="container py-4">
      <Header />
      <CategoryTabs setSelectedCategory={setSelectedCategory} />
      
      <div className="mb-4">
        <label className="form-label">Global Volume</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={globalVolume}
          onChange={(e) => setGlobalVolume(parseFloat(e.target.value))}
          className="form-range"
        />
      </div>

      <div className="row">
        {filteredSounds.map((sound, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <SoundButton sound={sound} globalVolume={globalVolume} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
