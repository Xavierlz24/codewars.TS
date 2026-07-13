export function positiveSum(arr:number[]):number {
    return arr
    .filter(num => num > 0)
    .reduce((acumulador, actual) => acumulador + actual, 0);
}