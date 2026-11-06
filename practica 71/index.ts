export const pigIt = (a : string) : string =>  {
 const valor = a.split(' ');
 const palabra = valor.map((palabra) => {
   if(/^[a-zA-Z]+$/.test(palabra)){
     return palabra.slice(1) + palabra[0] + 'ay';
   } else {
     return palabra;
   }
});

return palabra.join(' ');
   
}