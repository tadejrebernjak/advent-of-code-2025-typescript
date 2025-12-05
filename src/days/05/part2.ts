import type { Range } from "@/days/05/types";
import { removeAt } from "@/utils/array";

const rangesOverlap = (a: Range, b: Range) => {
  if (a.start > b.end || a.end < b.start) {
    return false;
  }

  return true;
};

const mergeRanges = (ranges: Range[]) => {
  let merges = 0;

  for (let i = ranges.length - 1; i >= 0; i--) {
    const currentRange = ranges[i];

    const overlappingRange = ranges.find((newRange, index) => index !== i && rangesOverlap(currentRange, newRange));
    if (!overlappingRange) {
      continue;
    }

    overlappingRange.start = Math.min(overlappingRange.start, currentRange.start);
    overlappingRange.end = Math.max(overlappingRange.end, currentRange.end);
    merges++;
    removeAt(ranges, i);
  }

  return merges;
};

export const solvePart2 = (ranges: Range[]) => {
  while (true) {
    const merged = mergeRanges(ranges);
    if (merged === 0) {
      break;
    }
  }

  return ranges.reduce((count, { start, end }) => count + end - start + 1, 0);
};
