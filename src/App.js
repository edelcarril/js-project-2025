import './App.css';
import GameBoy from "./Gameboy.js";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900 z-[-999]">
    <GameBoy>
      <span className="text-xs">Press Start</span>
    </GameBoy>
  </div>
  );
}

export default App;
