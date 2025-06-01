import React, { useState, useEffect, useRef } from "react";
import T from "./T";
import Z from "./Z";
import L from "./L";

const PIECES = [
  { type: T, shape: [[0, 1], [1, 0], [1, 1], [1, 2]] },
  { type: Z, shape: [[0, 0], [0, 1], [1, 1], [1, 2]] },
  { type: L, shape: [[0, 0], [1, 0], [2, 0], [2, 1]] },
];
const GRID_SIZE = { rows: 12, columns: 11 };

const createEmptyGrid = () =>
  Array.from({ length: GRID_SIZE.rows }, () =>
    Array(GRID_SIZE.columns).fill(null)
  );

const generateNewPiece = () => {
  const piece = PIECES[Math.floor(Math.random() * PIECES.length)];
  return {
    type: piece.type,
    shape: piece.shape,
    position: {
      row: 0,
      column: Math.floor(Math.random() * (GRID_SIZE.columns - 2)),
    },
  };
};

const TetrisScreen = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [currentPiece, setCurrentPiece] = useState(generateNewPiece());
  const [isGameOver, setIsGameOver] = useState(false);

  const blinkRef = useRef(null); // 👈 Referencia al texto Game Over

  // 👇 Parpadeo solo cuando está en Game Over
  useEffect(() => {
    if (!isGameOver) return;

    const interval = setInterval(() => {
      if (blinkRef.current) {
        blinkRef.current.style.visibility =
          blinkRef.current.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 2); // 👈 500ms queda bien para parpadeo

  }, [isGameOver]); // 👈 solo corre cuando cambia el estado

  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(() => {
      movePieceDown();
    }, 500);
    return () => clearInterval(interval);
  }, [currentPiece, isGameOver]);

  const isCollision = (piece) => {
    const { shape, position } = piece;
    return shape.some(([rowOffset, colOffset]) => {
      const newRow = position.row + rowOffset + 1;
      const newCol = position.column + colOffset;
      return (
        newRow >= GRID_SIZE.rows ||
        grid[newRow][newCol] !== null
      );
    });
  };

  const fixPieceToGrid = (piece) => {
    const { shape, position, type } = piece;
    const newGrid = grid.map((row) => [...row]);
    shape.forEach(([rowOffset, colOffset]) => {
      const row = position.row + rowOffset;
      const col = position.column + colOffset;
      if (row >= 0 && row < GRID_SIZE.rows && col >= 0 && col < GRID_SIZE.columns) {
        newGrid[row][col] = type;
      }
    });
    setGrid(newGrid);
  };

  const movePieceDown = () => {
    if (isCollision(currentPiece)) {
      fixPieceToGrid(currentPiece);
      const newPiece = generateNewPiece();
      if (isCollision(newPiece)) {
        setIsGameOver(true);
      } else {
        setCurrentPiece(newPiece);
      }
      return;
    }

    setCurrentPiece((prev) => ({
      ...prev,
      position: { row: prev.position.row + 1, column: prev.position.column },
    }));
  };

  const renderGridWithCurrentPiece = () => {
    const tempGrid = grid.map((row) => [...row]);
    const { shape, position, type } = currentPiece;

    shape.forEach(([rowOffset, colOffset]) => {
      const row = position.row + rowOffset;
      const col = position.column + colOffset;
      if (row >= 0 && row < GRID_SIZE.rows && col >= 0 && col < GRID_SIZE.columns) {
        tempGrid[row][col] = type;
      }
    });

    return tempGrid.map((row, rowIndex) =>
      row.map((cell, columnIndex) => (
        <div
          key={`${rowIndex}-${columnIndex}`}
          className={`w-7 h-7 ${
            cell ? "bg-emerald-600 border-2 border-teal-900" : "bg-zinc-900"
          }`}
        />
      ))
    );
  };

  return (
    <div className="w-full h-full bg-zinc-950 p-1 relative">
      {isGameOver ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <h1 className="text-emerald-500 font-mono text-xs" ref={blinkRef}>GAME OVER</h1>
        </div>
      ) : (
        <div
          className="grid gap-[1px] bg-zinc-800"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE.columns}, 31px)`,
            gridTemplateRows: `repeat(${GRID_SIZE.rows}, 31px)`,
          }}
        >
          {renderGridWithCurrentPiece()}
        </div>
      )}
    </div>
  );
};

export default TetrisScreen;
