export const swap = <T>(array: Array<T>, a: number, b: number): void => {
  [array[a], array[b]] = [array[b], array[a]];
};

export const insertAt = <T>(array: Array<T>, index: number, item: T): void => {
  array.splice(index, 0, item);
};

export const removeAt = <T>(array: Array<T>, index: number, amount: number = 1): void => {
  array.splice(index, amount);
};
