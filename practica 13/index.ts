function nextId(ids: number []): number{
  const ordenar = [...ids].sort((a,b) => a - b);
  let nextId = 0;
  
  
  for (const id of ordenar) {
    if (id === nextId) {
      nextId++;
    } else if (id > nextId) {
      break; 
    }
  }
  return nextId;
}