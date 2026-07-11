export function isIsogram(str: string): boolean{
 
  const count = str.toLowerCase();
 
  if(new Set(count).size !== count.length){
    return false;
  }else{
    return true;
  }
}