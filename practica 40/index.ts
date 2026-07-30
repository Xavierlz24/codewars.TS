export function sumTwoSmallestNumbers(numbers:Array<number>):number {  
  const ordenar = numbers.flat().sort((a, b) => a - b);
  return ordenar[0] + ordenar[1]; 
}