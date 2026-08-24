export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
	return [...iterable].filter((x,i)=>x!=iterable[i-1]);
};
