export function rot13(message: string): string {
 return message.replace(/[a-zA-Z]/g, char => {
    const code = char.charCodeAt(0);
    const base = code >= 97 ? 97 : 65;

    return String.fromCharCode(
      ((code - base + 13) % 26) + base
    );
  });
  
}  