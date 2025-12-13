import type { Position } from "@/types/grid";

const getArea = (a: Position, b: Position) => {
  const length = Math.abs(a.x - b.x) + 1;
  const height = Math.abs(a.y - b.y) + 1;

  return length * height;
};

export const solvePart1 = (tiles: Position[]) => {
  let max = 0;

  for (let i = 0; i < tiles.length - 1; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      const area = getArea(tiles[i], tiles[j]);
      max = Math.max(max, area);
    }
  }

  return max;
};
