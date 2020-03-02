import { searchValueIntwoDimensionsArr } from "../search";
import { mergeArray } from "../merge";
import { renderNewTwoDimensionArr } from '../../utils/array/array'

let targetArr:any[] = []
const unitLength = 5;
const length = 40
beforeEach(() => {
  targetArr = renderNewTwoDimensionArr(unitLength, length);
});

test("生成二维数组的方法", () => {
  expect(targetArr.length).toBe(length / unitLength);
});

test("二维数组中的查找", () => {
  expect(searchValueIntwoDimensionsArr(targetArr, 30)).toBe(true);
});

test('test marge function',() => {
  expect(mergeArray([1,8,9],[2,4,12])).toStrictEqual([1,2,4,8,9,12])
})

test('test marge function2',() => {
  expect(mergeArray([1,8,9,12,12,12],[2,4,4,12])).toStrictEqual([1,2,4,4,8,9,12,12,12,12])
})