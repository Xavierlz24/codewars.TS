export function SeriesSum(n:number):string{
 if (n <= 0) return '0.00';

  let suma = 0;

  for (let i = 1; i <= n; i++) {
    let denominador = 3 * i - 2;
    suma += 1 / denominador;
  }

  return suma.toFixed(2);

}