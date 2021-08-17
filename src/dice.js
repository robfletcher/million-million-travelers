export const roll = (n = 1, sides = 6) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.floor(Math.random() * sides) + 1;
  }
  return sum;
};

export const roll1d2 = () => roll(1, 2);
export const roll1d3 = () => roll(1, 3);
export const roll1d6 = () => roll(1, 6);
export const roll2d6 = () => roll(2, 6);
export const roll3d6 = () => roll(3, 6);
export const roll3d6dropLowest = () => {
  let array = [roll1d6(), roll1d6(), roll1d6()];
  delete array[array.indexOf(Math.min(...array))];
  return array.reduce((a, b) => a + b);
};
export const roll1d20 = () => roll(1, 20);

export const table1D6 = (table) => table[roll1d6() - 1];
export const table2D6 = (table) => table[roll2d6() - 2];
export const tableD66 = (table) => table[roll1d6() - 1][roll1d6() - 1];
export const tableD20 = (table) => table[roll1d20() - 1];
