export function printerError(s: string): string {
 const errores = s.replace(/[a-m]/g, "").length;
  const total = s.length;
  return `${errores}/${total}`;
}