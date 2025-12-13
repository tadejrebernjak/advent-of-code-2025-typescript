import { solvePart1 } from "@/days/09/part1";
import { solvePart2 } from "@/days/09/part2";
import type { Answer, Input, Solution } from "@/types/base";
import type { Position } from "@/types/grid";

export const main: Solution = (input: Input): Answer => {
  const tiles: Position[] = input.map((line) => {
    const [x, y] = line.split(",").map((str) => +str);
    return { x, y };
  });

  const part1 = solvePart1(tiles);
  const part2 = solvePart2();

  return {
    part1,
    part2,
  };
};
