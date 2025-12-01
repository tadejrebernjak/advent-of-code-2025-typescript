export type Input = string[];

export interface Answer {
  part1?: number | string | null;
  part2?: number | string | null;
}

export type Solution = (input: Input) => Answer;
