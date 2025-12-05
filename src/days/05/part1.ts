import type { Range } from "@/days/05/types";

const isFresh = (ranges: Range[], id: number) => {
  return ranges.some(({ start, end }) => id >= start && id <= end);
};

export const solvePart1 = (ranges: Range[], ids: number[]) => {
  return ids.reduce((count, id) => (isFresh(ranges, id) ? count + 1 : count), 0);
};
