import type { Answer, Input, Solution } from "@/types/base";
import { mod } from "@/utils/number";

const solvePart2 = (input: Input) => {
  let position = 50;
  let count = 0;

  for (const line of input) {
    const oldPosition = position;

    const direction = line[0];
    const steps = +line.slice(1);

    const loops = Math.floor(steps / 100);
    count += loops;

    const effectiveSteps = mod(steps, 100);

    if (direction === "R") {
      position += effectiveSteps;

      if (position > 99) {
        count++;
      }
    } else {
      position -= effectiveSteps;

      if (position <= 0 && oldPosition !== 0) {
        count++;
      }
    }

    position = mod(position, 100);
  }

  return count;
};

const solvePart1 = (input: Input) => {
  let position = 50;
  let count = 0;

  for (const line of input) {
    const direction = line[0];
    const steps = +line.slice(1);
    const effectiveSteps = mod(steps, 100);

    if (direction === "R") {
      position += effectiveSteps;
    } else {
      position -= effectiveSteps;
    }

    position = mod(position, 100);

    if (position === 0) {
      count++;
    }
  }

  return count;
};

export const main: Solution = (input: Input): Answer => {
  const part1 = solvePart1(input);
  const part2 = solvePart2(input);

  return {
    part1,
    part2,
  };
};
