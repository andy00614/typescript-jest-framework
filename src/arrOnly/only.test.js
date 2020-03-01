import { arrOnly } from "./index";

test("toBe vs toEqual ", () => {
  const arr = [1, 2, 2, 2, 4];
  const expectValue = [1, 2, 2, 2, 4];
  expect(arr).toStrictEqual(expectValue);
});

test("去重测试", () => {
  const arr = [1, 2, 2, 2, 4];
  const expectValue = [1, 2, 4];
  expect(arrOnly(arr)).toStrictEqual(expectValue);
});
