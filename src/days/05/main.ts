import { solvePart1 } from "@/days/05/part1";
import { solvePart2 } from "@/days/05/part2";
import type { Range } from "@/days/05/types";
import type { Answer, Input, Solution } from "@/types/base";

const parseInput = (input: Input) => {
  const emptyLineIndex = input.indexOf("");
  const rangesInput = input.slice(0, emptyLineIndex);
  const idsInput = input.slice(emptyLineIndex + 1);

  const ranges: Range[] = rangesInput.map((line) => {
    const [start, end] = line.split("-").map((boundString) => +boundString);
    return { start, end };
  });

  const ids = idsInput.map((id) => +id);

  return { ranges, ids };
};

export const main: Solution = (input: Input): Answer => {
  const { ranges, ids } = parseInput(input);

  const part1 = solvePart1(ranges, ids);
  const part2 = solvePart2(ranges);

  return {
    part1,
    part2,
  };
};
