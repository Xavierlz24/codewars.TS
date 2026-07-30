export function twoOldestAges(ages: number[]): number[] {
 const ordenar = [...ages].sort((a, b) => b - a);
 const valor = ordenar.slice(0,2);
  
  return valor.sort((a,b) => a - b);
}