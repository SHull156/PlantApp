export default function Controls({ onWater, onSun, onNeglect }) {
  return (
    <div className="controls">
      <button onClick={onWater}>💧 Water</button>
      <button onClick={onSun}>☀️ Sun</button>
      <button onClick={onNeglect}>⚠️ Neglect</button>
    </div>
  );
}