import type { Box, Circuit, Connection } from "@/days/08/types";
import { removeAt } from "@/utils/array";

export const solvePart1 = (boxes: Box[], connections: Connection[], n = 1000) => {
  const circuits: Circuit[] = boxes.map((box, index) => ({ id: index, boxes: [box] }));

  for (let i = 0; i < n; i++) {
    const connection = connections[i];

    const circuitAIndex = circuits.findIndex((circuit) => circuit.boxes.find((box) => box.id === connection.idA));
    const circuitBIndex = circuits.findIndex((circuit) => circuit.boxes.find((box) => box.id === connection.idB));
    const isSameCircuit = circuitAIndex === circuitBIndex;
    if (isSameCircuit) {
      continue;
    }

    const circuitA = circuits[circuitAIndex];
    const circuitB = circuits[circuitBIndex];
    circuitA.boxes = [...circuitA.boxes, ...circuitB.boxes];
    removeAt(circuits, circuitBIndex);
  }

  circuits.sort((a, b) => b.boxes.length - a.boxes.length);
  return circuits.slice(0, 3).reduce((result, circuit) => result * circuit.boxes.length, 1);
};
