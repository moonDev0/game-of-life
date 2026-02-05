export const createGrid = (rows, cols, init = () => 0) =>
  Array.from({ length: rows }, () =>
    Array.from({ length: cols }, init)
  );

export const getCell = (grid, x, y) => {
  if (x >= 0 && x < grid[0].length && y >= 0 && y < grid.length) {
    return grid[y][x];
  }
  return 0;
};
