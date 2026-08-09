export function oddOrEven(array: number[]) {
  return array.reduce((sum, value) => sum += value, 0) % 2 === 0 ? 'even' : 'odd';
}