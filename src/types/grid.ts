export type Grid<T = string> = T[][];

export type DirectionOrdinal = "up" | "up_right" | "right" | "down_right" | "down" | "down_left" | "left" | "up_left";

export type DirectionCardinal = "^" | ">" | "v" | "<";

export interface Position {
  x: number;
  y: number;
}

export type Movement = Position;

export interface Turn extends Position {
  direction: DirectionCardinal;
}
