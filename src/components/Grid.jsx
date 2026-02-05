const Grid = ({ grid, toggleCell, cols }) => (
  <div
    className="stage"
    style={{ gridTemplateColumns: `repeat(${cols}, 20px)` }}
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
);

export default Grid;
