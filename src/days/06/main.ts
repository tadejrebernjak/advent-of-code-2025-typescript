import { solvePart1 } from "@/days/06/part1";
import { solvePart2 } from "@/days/06/part2";
import type { Answer, Input, Solution } from "@/types/base";

export const main: Solution = (input: Input): Answer => {
  const part1 = solvePart1(input);
  const part2 = solvePart2(input);

  return {
    part1,
    part2,
  };
};
