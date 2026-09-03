export function findEvenIndex(arr: number[]): number{
   let sumaTotal = arr.reduce((acc, num) => acc + num, 0);
  let sumaIzquierda = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumaDerecha = sumaTotal - sumaIzquierda - arr[i];

        if (sumaIzquierda === sumaDerecha) {
            return i;
        }
        sumaIzquierda += arr[i];
    }
    return -1;
}