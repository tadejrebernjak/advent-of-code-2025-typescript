export interface Box {
  id: number;
  x: number;
  y: number;
  z: number;
}

export interface Connection {
  idA: Box["id"];
  idB: Box["id"];
  distance: number;
}

export interface Circuit {
  id: number;
  boxes: Box[];
}
