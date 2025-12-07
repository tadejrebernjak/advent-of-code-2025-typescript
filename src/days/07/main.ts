import { solvePart1 } from "@/days/07/part1";
import { solvePart2 } from "@/days/07/part2";
import type { Answer, Input, Solution } from "@/types/base";

export const main: Solution = (input: Input): Answer => {
  const grid = input.map((row) => row.split(""));

  const part1 = solvePart1(grid);
  const part2 = solvePart2(grid);

  return {
    part1,
    part2,
  };
};
