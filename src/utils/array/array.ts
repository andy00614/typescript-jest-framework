export const renderNewTwoDimensionArr = (
  count: number,
  length: number
): number[][] => {
  let result: number[][] = [];
  let curArr: number[] = [];
  for (let i = 0; i < length; i++) {
    curArr.push(i);
    if (i % count === count - 1) {
      result.push(curArr);
      curArr = [];
    }
  }
  return result;
};