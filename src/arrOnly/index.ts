export function arrOnly(arr:any[]) {
  const rst =  new Set(arr)
  return Array.from(rst)
}