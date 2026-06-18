export function sakuraFall(v: number): number {
  if(v <= 0){
    return 0;
  }
  const tiempo = 400;
  
  return tiempo / v;
}