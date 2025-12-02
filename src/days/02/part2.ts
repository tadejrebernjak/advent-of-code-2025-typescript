// Split into segments - 2 then 3 then 4 until n, check if all segments are equal on each iteration - if yes, return true

import { isInt } from "@/utils/number";

const hasPattern = (id: string, numSegments: number, segmentLength: number) => {
  const pattern = id.slice(0, segmentLength);

  for (let i = 1; i < numSegments; i++) {
    const start = i * segmentLength;
    const end = (i + 1) * segmentLength;
    const segment = id.slice(start, end);

    if (segment !== pattern) {
    }
  }
};

const isInvalidId = (id: string) => {
  for (let numSegments = 2; numSegments < id.length / 2; numSegments++) {
    const segmentLength = id.length / numSegments;
    const canBeSplit = isInt(segmentLength);
    if (!canBeSplit) {
      continue;
    }

    if (pattern && character === pattern[0]) {
    }
  }

  return false;
};

export const solvePart2 = (ranges: string[]) => {
  let result = 0;

  for (const range of ranges) {
    const [start, end] = range.split("-");

    for (let id = +start; id <= +end; id++) {
      if (isInvalidId(id.toString())) {
        result += id;
      }
    }
  }

  return result;
};
