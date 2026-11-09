export const productFib = (prod:number): [number,number,boolean] => {
    let prev = 0;
    let curr = 1;
    while (prev * curr < prod) {
        const next = prev + curr;
	      prev = curr;
	      curr = next;
    }
    return [prev, curr, prev * curr === prod];

}