import { useEffect, useState } from 'react';
import { createGrid } from '../utils/grid';
import { countNeighbors } from '../utils/life';
import Controls from './Controls';
import Grid from './Grid';

const ROWS = 25;
const COLS = 25;

const GameOfLife = () => {
  const [grid, setGrid] = useState(() => createGrid(ROWS, COLS));
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setGrid(prev =>
        prev.map((row, y) =>
          row.map((cell, x) => {
            const neighbors = countNeighbors(prev, x, y);
            if (cell && (neighbors < 2 || neighbors > 3)) return 0;
            if (!cell && neighbors === 3) return 1;
            return cell;
          })
        )
      );
    }, 250);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="scene">
      <h1>Game of Life</h1>

      <Controls
        running={running}
        onToggle={() => setRunning(!running)}
        onClear={() => setGrid(createGrid(ROWS, COLS))}
      />

      <Grid
        grid={grid}
        toggleCell={(x, y) =>
          setGrid(prev =>
            prev.map((row, ry) =>
              row.map((cell, cx) =>
                ry === y && cx === x ? (cell ? 0 : 1) : cell
              )
            )
          )
        }
        cols={COLS}
      />
    </div>
  );
};

export default GameOfLife;
