export function areYouPlayingBanjo(name: string): string {
   if (name.startsWith('R') || name.startsWith('r')) {
        return name + " plays banjo" 
 }else{
   return name + " does not play banjo"
 }
}