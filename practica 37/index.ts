export const longest = (s1:string, s2:string): string => {
 const letras = new Set( (s1 + s2).split('') );
  
 return Array.from(letras).sort().join('');
}