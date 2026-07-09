export function past(h: number, m: number, s: number): number {
 return (h * 3600000) + (m * 60000) + (s * 1000);
}