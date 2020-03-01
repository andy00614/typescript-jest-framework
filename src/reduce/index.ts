// 写逻辑文件

// 15
export function sum(arr:any[]) {
  return arr.reduce((rst,cur) => {
    return rst + cur
  },0)
}

export function arr2Str(arr:any[]):string {
  return arr.reduce((rst,cur) => {
    return rst + cur
  },'')
}