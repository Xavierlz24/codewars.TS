export function openOrSenior(data:number[][]):string[]{
  return data.map(([edad, handicap]) =>  {
    if(edad >= 55 && handicap > 7){
      return 'Senior'
    }else{
      return 'Open'
    }
  })
}