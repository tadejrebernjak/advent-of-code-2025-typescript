import { solvePart1 } from "@/days/08/part1";
import { solvePart2 } from "@/days/08/part2";
import type { Box, Connection } from "@/days/08/types";
import type { Answer, Input, Solution } from "@/types/base";

const getDistance = (a: Box, b: Box) => {
  return (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2;
};

const parseInput = (input: Input) => {
  const boxes: Box[] = input.map((line, index) => {
    const [x, y, z] = line.split(",").map((str) => +str);
    return { id: index, x, y, z };
  });

  const connections: Connection[] = [];
  for (let i = 0; i < boxes.length - 1; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i];
      const b = boxes[j];

      const distance = getDistance(a, b);
      connections.push({
        distance,
        idA: a.id,
        idB: b.id,
      });
    }
  }

  connections.sort((a, b) => a.distance - b.distance);

  return { boxes, connections };
};

export const main: Solution = (input: Input): Answer => {
  const { boxes, connections } = parseInput(input);

  const part1 = solvePart1(boxes, connections);
  const part2 = solvePart2(boxes, connections);

  return {
    part1,
    part2,
  };
};
