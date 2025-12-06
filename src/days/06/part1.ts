import type { Operation } from "@/days/06/types";
import type { Input } from "@/types/base";

const SPACE_REGEX = / {1,}/g;

const calculateColumn = (numbers: number[][], column: number, operation: Operation) => {
  const operands = numbers.map((row) => row[column]);

  if (operation === "+") {
    return operands.reduce((sum, operand) => sum + operand, 0);
  }

  return operands.reduce((product, operand) => product * operand, 1);
};

const parseInput = (input: Input) => {
  const numbers: number[][] = [];
  for (let i = 0; i < input.length - 1; i++) {
    const row = input[i];
    numbers.push(
      row
        .split(SPACE_REGEX)
        .filter((str) => Boolean(str))
        .map((str) => +str),
    );
  }

  const operations: Operation[] = input[input.length - 1]
    .split(SPACE_REGEX)
    .filter((str) => Boolean(str)) as Operation[];

  return { numbers, operations };
};

export const solvePart1 = (input: Input) => {
  const { numbers, operations } = parseInput(input);

  return operations.reduce((sum, operation, columnIndex) => sum + calculateColumn(numbers, columnIndex, operation), 0);
};
