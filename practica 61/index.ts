export const digitalRoot = (n:number):number => {
 if (n < 10) {
    return n;
  }

  const suma: number = n
    .toString()
    .split('')
    .reduce((acumulador: number, digito: string) => acumulador + Number(digito), 0);

  return digitalRoot(suma);
};