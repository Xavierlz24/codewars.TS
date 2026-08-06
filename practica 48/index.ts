function factorial(n: number): number{
  if(!(n >= 0 && n <= 12)) throw new RangeError();
  let result = 1;
  for(let i = 2; i <= n; i++){
    result *= i;
  }
  return result;
}