import type { Operation, Problem } from "@/days/06/types";
import type { Input } from "@/types/base";

const OPERATION_REGEX = /\+|\*/g;

const calculateProblem = ({ operandRows, operation }: Problem) => {
  const operands: number[] = [];
  const rowLength = operandRows[0].length;

  for (let i = rowLength - 1; i >= 0; i--) {
    const operand = +operandRows.map((row) => row.charAt(i)).join("");
    operands.push(operand);
  }

  if (operation === "+") {
    return operands.reduce((sum, operand) => sum + operand, 0);
  }

  return operands.reduce((product, operand) => product * operand, 1);
};

const parseInput = (input: Input) => {
  const numberRows = input.slice(0, input.length - 1);
  const operationsRow = input[input.length - 1];

  const matches = operationsRow.matchAll(OPERATION_REGEX);

  const operations = Array.from(matches, (match) => ({ operation: match[0], index: match.index }));
  const problems: Problem[] = [];

  for (const [matchIndex, operation] of operations.entries()) {
    const isLastColumn = matchIndex === operations.length - 1;
    const endIndex = isLastColumn ? operationsRow.length : operations[matchIndex + 1].index - 1;

    const operandRows = numberRows.map((row) => row.slice(operation.index, endIndex));
    problems.push({ operandRows, operation: operation.operation as Operation });
  }

  return problems;
};

export const solvePart2 = (input: Input) => {
  const problems = parseInput(input);

  return problems.reduce((sum, problem) => sum + calculateProblem(problem), 0);
};
