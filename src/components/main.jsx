import React, { useEffect, useState } from 'react';

const createGrid = (rows, cols, init = () => 0) =>
  Array.from({ length: rows }, () =>
    Array.from({ length: cols }, init)
  );

const getCell = (grid, x, y) => {
  if (x >= 0 && x < grid[0].length && y >= 0 && y < grid.length) {
    return grid[y][x];
  }
  return 0;
};


const countNeighbors = (grid, x, y) => {
  const topLeft = getCell(grid, x - 1, y - 1);
  const top = getCell(grid, x, y - 1);
  const topRight = getCell(grid, x + 1, y - 1);

  const left = getCell(grid, x - 1, y);
  const right = getCell(grid, x + 1, y);

  const bottomLeft = getCell(grid, x - 1, y + 1);
  const bottom = getCell(grid, x, y + 1);
  const bottomRight = getCell(grid, x + 1, y + 1);

  return (
    topLeft + top + topRight +
    left + right +
    bottomLeft + bottom + bottomRight
  );
};

const ROWS = 25;
const COLS = 25;

const Main = () => {
  const [grid, setGrid] = useState(() => createGrid(ROWS, COLS));
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setGrid(prevGrid =>
        prevGrid.map((row, y) =>
          row.map((cell, x) => {
            const neighbors = countNeighbors(prevGrid, x, y);

            if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
            if (cell === 0 && neighbors === 3) return 1;
            return cell;
          })
        )
      );
    }, 250);

    return () => clearInterval(interval);
  }, [running]);

  const toggleCell = (x, y) => {
    setGrid(prev =>
      prev.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === y && colIndex === x ? (cell ? 0 : 1) : cell
        )
      )
    );
  };

  return (
    <div className="scene">
      <h1 className="title">Conway's Game of Life</h1>

      <div className="controls">
        <button
          className={`btn ${running ? 'stop' : 'start'}`}
          onClick={() => setRunning(!running)}
        >
          {running ? 'Stop' : 'Start'}
        </button>

        <button
          className="btn clear"
          onClick={() => setGrid(createGrid(ROWS, COLS))}
        >
          Clear
        </button>
      </div>

      <div
        className="stage"
        style={{ gridTemplateColumns: `repeat(${COLS}, 20px)` }}
      >
        {grid.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`cell ${cell ? 'alive' : ''}`}
              onClick={() => toggleCell(x, y)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
