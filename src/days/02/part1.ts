import { isEven } from "@/utils/number";

const isInvalidId = (id: string) => {
  if (!isEven(id.length)) {
    return false;
  }

  const mid = id.length / 2;
  const left = id.slice(0, mid);
  const right = id.slice(mid);

  return left === right;
};

export const solvePart1 = (ranges: string[]) => {
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
