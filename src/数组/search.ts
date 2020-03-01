// 二维数组中的查找
export function searchValueIntwoDimensionsArr(
  arr: number[][],
  target: number
): boolean {
  let row = 0;
  let column = arr[0].length - 1;
  let result = null;
  while (row < arr.length && column >= 0) {
    const curValue = arr[row][column];
    if (target === curValue) {
      result = target;
      break;
    } else if (target < curValue) {
      column = column - 1;
    } else {
      row = row + 1;
    }
  }
  if (result) {
    return true;
  }
  return false;
}

export function find(arr:any,num:any){
  for(let i = 0; i < arr.length;i ++){
    for(let j = 0; j < arr[i].length; j ++){
      if(arr[i][j] === num){
        return true
      }
    }
  }
  return false
}