var hotpo = function(n: number): number{
    let pasos=0;
    while (n>1){
      pasos++;
      n=n%2?n*3+1:n/2;
    }
    return pasos;
}