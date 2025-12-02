export const avg = (a: number, b: number): number => {
  return (a + b) / 2;
};

export const mod = (number: number, mod: number): number => {
  return ((number % mod) + mod) % mod;
};

export const isInt = (num: number): boolean => {
  return num % 1 === 0;
};

export const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

export const isOdd = (num: number): boolean => {
  return isInt(num) && !isEven(num);
};
