import type { Grid, Position } from "@/types/grid";

const getDpKey = ({ x, y }: Position) => `${x},${y}`;

const simulateBeam = (grid: Grid, position: Position, solutions: Map<string, number>) => {
  const { x, y } = position;

  const dpKey = getDpKey(position);
  if (solutions.has(dpKey)) {
    return solutions.get(dpKey);
  }

  if (y >= grid.length) {
    return 1;
  }

  const isSplitter = grid[y][x] === "^";
  if (isSplitter) {
    const left = simulateBeam(grid, { x: x - 1, y }, solutions);
    const right = simulateBeam(grid, { x: x + 1, y }, solutions);

    return left + right;
  }

  const newPosition = { x, y: y + 1 };
  const timelines = simulateBeam(grid, newPosition, solutions);
  solutions.set(getDpKey(newPosition), timelines);
  return timelines;
};

export const solvePart2 = (grid: Grid) => {
  const startingBeam = {
    x: grid[0].indexOf("S"),
    y: 0,
  };

  const solutions = new Map<string, number>();

  return simulateBeam(grid, startingBeam, solutions);
};
