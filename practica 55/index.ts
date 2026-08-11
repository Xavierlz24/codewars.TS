export function spinWords(words: string): string {
    return words
    .split(' ')
    .map(str => (str.length >= 5 ? str.split('').reverse().join('') : str))
    .join(' ');
}