// 合并两个数组A1,A2并排序
// 要求不引入第三个变量，并且时间复杂度为n

export function mergeArray(a1: number[], a2: number[]): number[] {
  // 1.双指针，第一个指针指向 a1最后一个位置, 第二个指针指向A2的最后一个位置(a2Position)
  // 2.数组位置指针(arrPosition)，在数组的最后一个位置(A1_length + A2_length)
  // 3.移动数组arrPosition直到小于0
  let a1Postion = a1.length - 1;
  let a2Position = a2.length - 1;
  let arrPosition = a1.length + a2.length - 1;
  while (arrPosition >= 0 && a1Postion >= 0 && a2Position >= 0) {
    if (a1[a1Postion] > a2[a2Position]) {
      a1[arrPosition--] = a1[a1Postion--];
    } else {
      a1[arrPosition--] = a2[a2Position--];
    }
  }

  while(arrPosition >= 0) {
    if(a1Postion >= 0) {
      a1[arrPosition--] = a1[a1Postion--]
    } else {
      a1[arrPosition--] = a2[a2Position--]
    }
  }
  return a1;
}
