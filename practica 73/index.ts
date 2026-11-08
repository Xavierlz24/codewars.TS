export function dirReduc(arr: string[]): string[] {
  const opposites:{[item: string]: string} = {"SOUTH": "NORTH", "NORTH": "SOUTH", "WEST": "EAST", "EAST": "WEST"}
  let stack = []
  for (let dir of arr) {
    stack[stack.length - 1] === opposites[dir] ? stack.pop() : stack.push(dir)
  }
  return stack
}