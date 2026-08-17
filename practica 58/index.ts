export const findOdd = (xs: number[]): number => {
 return xs.reduce((acc, num) => acc ^ num, 0);
};
