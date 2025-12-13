import type { Box, Circuit, Connection } from "@/days/08/types";
import { removeAt } from "@/utils/array";

export const solvePart2 = (boxes: Box[], connections: Connection[]) => {
  const circuits: Circuit[] = boxes.map((box, index) => ({ id: index, boxes: [box] }));

  for (const connection of connections) {
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

    if (circuits.length === 1) {
      const a = boxes.find((box) => box.id === connection.idA);
      const b = boxes.find((box) => box.id === connection.idB);

      return a.x * b.x;
    }
  }
};
