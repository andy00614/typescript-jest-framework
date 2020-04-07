test("检测有特殊字符正则", () => {
  const regex = /\p{P}/u;
  expect(regex.test('我包含特殊字符^(&，应该为true')).toBe(true);
  expect(regex.test('我包含特殊字符?，应该为true')).toBe(true);
  expect(regex.test('我包含特殊字符[，应该为true')).toBe(true);
  expect(regex.test('我包含特殊字符_，应该为true')).toBe(true);
});
test("检测无特殊字符正则", () => {
  const regex = /\p{P}/u;
  expect(regex.test('我不包含特殊字符应该为false')).toBe(false);
  expect(regex.test('zad')).toBe(false);
});