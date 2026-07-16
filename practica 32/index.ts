export function findShort(s: string): number {
  const palabras = s.split(' ');
  const longitudes = palabras.map(palabra => palabra.length);
  return Math.min(...longitudes);
}