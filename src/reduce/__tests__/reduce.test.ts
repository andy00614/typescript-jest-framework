// 写测试的
// test
// emoj
import { sum, arr2Str } from "../index";

test("测试reduce", () => {
  const testedArr = [1, 2, 3, 4, 5];
  const testedArr2 = [1, 2, 3, 4, 5, 6];
  expect(sum(testedArr)).toBe(15);
  expect(sum(testedArr2)).toBe(21);
});


test('测试数组变字符串',() => {
  const testedArr = [1, 2, 3, 4, 5];
  expect(arr2Str(testedArr)).toBe('12345')
})

test('number toString',() => {
  expect('1'.toString()).toBe('1')
})