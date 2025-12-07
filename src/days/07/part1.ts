import type { Grid, Position } from "@/types/grid";
import { removeAt } from "@/utils/array";
import { getGridValue } from "@/utils/grid";

export const solvePart1 = (grid: Grid) => {
  const startingBeam = {
    x: grid[0].indexOf("S"),
    y: 0,
  };

  const beams: Position[] = [startingBeam];
  let totalSplits = 0;

  for (let y = 1; y < grid.length; y++) {
    for (let i = beams.length - 1; i >= 0; i--) {
      const beam = beams[i];
      const x = beam.x;

      const isBeam = grid[y][x] === "|";
      if (isBeam) {
        removeAt(beams, i);
        continue;
      }

      const isSplitter = grid[y][x] === "^";
      if (!isSplitter) {
        grid[y][x] = "|";
        beam.y++;
        continue;
      }

      const leftPosition = { x: x - 1, y };
      const leftValue = getGridValue(grid, leftPosition);
      if (leftValue === ".") {
        grid[y][x - 1] = "|";
        beams.push(leftPosition);
      }

      const rightPosition = { x: x + 1, y };
      const rightValue = getGridValue(grid, rightPosition);
      if (rightValue === ".") {
        grid[y][x + 1] = "|";
        beams.push(rightPosition);
      }

      removeAt(beams, i);
      totalSplits++;
    }
  }

  return totalSplits;
};
