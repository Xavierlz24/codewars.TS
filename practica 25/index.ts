export function accum(s: string): string {
  return s.split('').map((letra, index) => 
  {return letra.toUpperCase() + letra.toLowerCase().repeat(index)}).join('-') ;
}