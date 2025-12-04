import type { DirectionCardinal, DirectionOrdinal, Grid, Position } from "@/types/grid.js";

export const DIRECTIONS_ORDINAL: DirectionOrdinal[] = [
  "up",
  "up_right",
  "right",
  "down_right",
  "down",
  "down_left",
  "left",
  "up_left",
];

export const DIRECTIONS_CARDINAL: DirectionCardinal[] = ["^", ">", "v", "<"];

export const copyGrid = <T>(grid: Grid<T>) => {
  return grid.map((row) => row.slice());
};

export const isInBounds = <T>(grid: Grid<T>, { x, y }: Position) => {
  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
};

export const getGridValue = <T>(grid: Grid<T>, { x, y }: Position) => {
  return isInBounds(grid, { x, y }) ? grid[y][x] : null;
};

export const setGridValue = <T>(grid: Grid<T>, { x, y }: Position, value: T) => {
  if (!isInBounds(grid, { x, y })) {
    return;
  }

  grid[y][x] = value;
};

export const updatePositionOrdinal = ({ x, y }: Position, direction: DirectionOrdinal, offset = 1): Position => {
  if (direction.includes("left")) {
    x -= offset;
  }
  if (direction.includes("right")) {
    x += offset;
  }
  if (direction.includes("down")) {
    y += offset;
  }
  if (direction.includes("up")) {
    y -= offset;
  }

  return { x, y };
};

export const updatePositionCardinal = ({ x, y }: Position, direction: DirectionCardinal): Position => {
  if (direction === "^") y--;
  if (direction === ">") x++;
  if (direction === "v") y++;
  if (direction === "<") x--;

  return { x, y };
};
