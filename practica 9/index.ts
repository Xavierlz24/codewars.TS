export class Kata {
  static getCount(str: string): number {
     return (str.match(/[aeiou]/ig)||[]).length;
  }
}