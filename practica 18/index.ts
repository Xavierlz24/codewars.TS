export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  let suma = 0;
  
  for(let i = 0; i < classPoints.length; i++){
    suma += classPoints[i];
  }
  
  const promedio = suma / classPoints.length;
  
  if(promedio < yourPoints ){
    return true;
  }else{
    return false;
  }
}