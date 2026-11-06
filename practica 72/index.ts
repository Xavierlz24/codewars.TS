export function humanReadable(seconds:number):string {
  const horas = Math.floor(seconds / 3600);
  const minutos = Math.floor((seconds % 3600) / 60);
  const segundos = seconds % 60;
  
  const formatoHora = String(horas).padStart(2,'0');
  const formatoMinuto = String(minutos).padStart(2,'0');
  const formatoSegundos = String(segundos).padStart(2,'0');
  
  return `${formatoHora}:${formatoMinuto}:${formatoSegundos}`;
  
}