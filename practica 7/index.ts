export const iceBrickVolume = (radius: number, bottleLength: number, rimLength: number): number => {

   const ancho = 2 * radius;
  
  const logitud = ancho;
  
  const alto = bottleLength - rimLength;
  
  const  resultado= logitud * ancho * alto;
  
  return resultado / 2;
}