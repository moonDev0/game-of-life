import { getCell } from './grid';

export const countNeighbors = (grid, x, y) => {
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
