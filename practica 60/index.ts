export function deadAntCount (ants:string | null) : number {
  if (ants === null)
    return 0;
  else {
    return Math.max(ants.split("a").length,ants.split("n").length,ants.split("t").length) - ants.split("ant").length;
  }
}