export function getMiddle(s:string): string  {
   const mitad = s.length / 2;
  
   if (s.length % 2 === 0) {
    return s.substring(mitad - 1, mitad + 1);
  } else {
    return s.charAt(Math.floor(mitad));
  }
}