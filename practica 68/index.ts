export function findUniq(arr: number[]): number {

  const repetido = arr[0] === arr[1] ? arr[0] : arr[2];
  
  return arr.find((num) => num !== repetido)!;
}
