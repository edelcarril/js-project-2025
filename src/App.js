import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import GameBoy from "./Gameboy.js";
import TetrisScreen from './tetris/tetris_screen.js';

function App() {
  const [showTetris, setShowTetris] = useState(false);
  const blinkRef = useRef(null); // 1. useRef dentro del componente

  useEffect(() => {
    const interval = setInterval(() => {
      if (blinkRef.current) {
        blinkRef.current.style.visibility =
          blinkRef.current.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 2);


  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900 z-[-999]">
      <GameBoy onStart={() => setShowTetris(true)}>
        {showTetris ? (
          <TetrisScreen />
        ) : (
          <span className="text-xs" ref={blinkRef}>Press Start</span> // 2. usar `ref={blinkRef}`
        )}
      </GameBoy>
    </div>
  );
}

export default App;
