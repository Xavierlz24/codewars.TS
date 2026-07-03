function findAverage(array: number[]): number {  
  if (array.length === 0) return 0;
  const suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  return suma / array.length;
}