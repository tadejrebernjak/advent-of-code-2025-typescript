import { solvePart1 } from "@/days/02/part1";
import { solvePart2 } from "@/days/02/part2";
import type { Answer, Input, Solution } from "@/types/base";

export const main: Solution = (input: Input): Answer => {
  const ranges = input[0].split(",");

  const part1 = solvePart1(ranges);
  const part2 = solvePart2(ranges);

  return {
    part1,
    part2,
  };
};
