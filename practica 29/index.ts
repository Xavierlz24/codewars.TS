export function xo(str: string) : boolean {
  const lowerStr = str.toLowerCase();
  
  const cantX = lowerStr.split('x').length - 1;
  const cantO = lowerStr.split('o').length - 1;
  
  return cantX === cantO;
}