import { useState, useEffect } from "react";
import Plant from "./components/Plant";
import Controls from "./components/Controls";
import HealthBar from "./components/HealthBar";
import './App.css';

function App() {
  const [health, setHealth] = useState(() => {
    return Number(localStorage.getItem("plantHealth")) || 70;
  });

  const [type, setType] = useState("flower"); // default plant type

  useEffect(() => {
    localStorage.setItem("plantHealth", health);
  }, [health]);

  useEffect(() => {
    const decay = setInterval(() => {
      setHealth(prev => Math.max(prev - 1, 0));
    }, 60000);
    return () => clearInterval(decay);
  }, []);

  const waterPlant = () => setHealth(h => Math.min(h + 15, 100));
  const sunPlant = () => setHealth(h => Math.min(h + 10, 100));
  const hurtPlant = () => setHealth(h => Math.max(h - 20, 0));

  return (
    <div className="app">
      <h1>PlantPal</h1>

      {/* Plant type selector */}
      <label>
        Choose a plant type: 
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="flower">🌻 Flower</option>
          <option value="cactus">🌵 Cactus</option>
          <option value="herb">🌿 Herb</option>
        </select>
      </label>

      <Plant health={health} type={type} />
      <HealthBar health={health} />
      <Controls onWater={waterPlant} onSun={sunPlant} onNeglect={hurtPlant} />
    </div>
  );
}

export default App;
