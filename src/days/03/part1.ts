const getHighestJoltage = (bank: string) => {
  let leftDigit = 0;
  let rightDigit = 0;

  for (let i = 0; i < bank.length; i++) {
    const digit = +bank[i];

    if (leftDigit < rightDigit) {
      leftDigit = rightDigit;
      rightDigit = digit;
      continue;
    }

    if (digit > rightDigit) {
      rightDigit = digit;
    }
  }

  return +`${leftDigit}${rightDigit}`;
};

export const solvePart1 = (banks: string[]) => {
  return banks.reduce((prev, bank) => prev + getHighestJoltage(bank), 0);
};
