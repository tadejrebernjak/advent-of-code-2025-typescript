const insertDigit = (digits: number[], newDigit: number, digitsLeft: number) => {
  let index = digits.length - 1;
  let depth = 0;

  while (index >= 0 && depth < digitsLeft) {
    if (digits[index] >= newDigit) {
      break;
    }

    digits[index] = newDigit;
    if (depth > 0) {
      digits[index + 1] = 0;
    }

    index--;
    depth++;
  }
};

const getHighestJoltage = (bank: string, n = 12) => {
  const digits = new Array<number>(n).fill(0);

  for (let i = 0; i < bank.length; i++) {
    const newDigit = +bank[i];
    const digitsLeft = bank.length - i;

    insertDigit(digits, newDigit, digitsLeft);
  }

  return +digits.map((digit) => digit.toString()).join("");
};

export const solvePart2 = (banks: string[]) => {
  return banks.reduce((prev, bank) => prev + getHighestJoltage(bank), 0);
};
