export function arrayDiff(a: number[], b: number[]): number[] {
 const valor = new Set(b);
 return a.filter(num => !valor.has(num));
}
