export function drawStairs(n: number): string {
  
let result = "I"
for(let i=1; i<n;  i++) {
 result +="\n" + " ".repeat(i) + 'I' ;
}return result 
}