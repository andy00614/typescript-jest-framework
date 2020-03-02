import { parseError, judgeBrowser, getEfficientUrl, getStack } from "../index";
const fixtureStack = `TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9
  at foo http://192.168.31.8:8000/b.js:4:15
  at calc http://192.168.31.8:8000/a.js:4:3
  at <anonymous>:1:11
  at http://192.168.31.8:8000/a.js:22:3`;

const fixtureFirefoxStack = `
  bar@http://192.168.31.8:8000/c.js:2:9
  foo@http://192.168.31.8:8000/b.js:4:15
  calc@http://192.168.31.8:8000/a.js:4:3
  <anonymous>:1:11
  http://192.168.31.8:8000/a.js:22:3
`;

const rst = {
  message: "",
  stack: [
    {
      line: 2,
      column: 9,
      filename: "http://192.168.31.8:8000/c.js"
    },
    {
      line: 4,
      column: 15,
      filename: "http://192.168.31.8:8000/b.js"
    },
    {
      line: 4,
      column: 3,
      filename: "http://192.168.31.8:8000/a.js"
    },
    {
      line: 22,
      column: 3,
      filename: "http://192.168.31.8:8000/a.js"
    }
  ]
};

test("chrome", () => {
  expect(parseError(new Error(fixtureStack))).toStrictEqual(rst);
});

test("firefox", () => {
  expect(parseError(new Error(fixtureFirefoxStack))).toStrictEqual(rst);
});

test("test broswer", () => {
  expect(judgeBrowser(fixtureStack)).toBe("chrome");
  expect(judgeBrowser(fixtureFirefoxStack)).toBe("firefox");
});

test("test regx", () => {
  expect(getEfficientUrl("at foo http://192.168.31.8:8000/b.js:4:15")).toBe(
    "http://192.168.31.8:8000/b.js:4:15"
  );
  expect(getEfficientUrl("calc@http://192.168.31.8:8000/a.js:4:3")).toBe(
    "http://192.168.31.8:8000/a.js:4:3"
  );
  expect(getEfficientUrl("<anonymous>:1:11")).toBe("");
});

test("test getStack", () => {
  expect(getStack("http://192.168.31.8:8000/b.js:4:15")).toStrictEqual({
    message: "",
    line: 4,
    column: 15,
    filename: "http://192.168.31.8:8000/b.js"
  });
  // expect(judgeBrowser(fixtureFirefoxStack)).toBe("firefox");
});
