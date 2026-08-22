export function narcissistic(value: number): boolean {
  const digitos = String(value).split('');
  const valor = digitos.length;
  
  const suma = digitos.reduce((acum, digit) => {
    return acum + Math.pow(Number(digit), valor);
  },0);
  return suma === value;
}
