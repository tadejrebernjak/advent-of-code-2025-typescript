import type { Grid, Position } from "@/types/grid";
import { DIRECTIONS_ORDINAL, getGridValue, updatePositionOrdinal } from "@/utils/grid";

const isPaper = (char: string) => char === "@";

const countAdjacentPapers = (grid: Grid, position: Position) => {
  return DIRECTIONS_ORDINAL.reduce((count, direction) => {
    const newPosition = updatePositionOrdinal(position, direction);
    const adjacentChar = getGridValue(grid, newPosition);

    return isPaper(adjacentChar) ? count + 1 : count;
  }, 0);
};

export const solvePart1 = (grid: Grid) => {
  let count = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const char = grid[y][x];
      if (!isPaper(char)) {
        continue;
      }

      if (countAdjacentPapers(grid, { x, y }) < 4) {
        count++;
      }
    }
  }

  return count;
};
