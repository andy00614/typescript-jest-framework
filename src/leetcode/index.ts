type Stack = Array<{
  line: number;
  column: number;
  filename: string;
}>;

export interface ErrorMessage {
  message: string;
  stack: Stack;
}

export function judgeBrowser(info: string): "chrome" | "firefox" {
  return info.includes("TypeError:") ? "chrome" : "firefox";
}

export function parseError(err: Error): ErrorMessage {
  // implement
  const target = err.message;
  const infos = target.split("\n");
  const urls = infos
    .filter(info => getEfficientUrl(info))
    .map(item => getEfficientUrl(item))
    .map(item => getStack(item as string));
  const rst: Stack = urls.reduce((arr, cur) => {
    arr.push({
      line: cur.line,
      column: cur.column,
      filename: cur.filename
    });
    return arr;
  }, []);
  return {
    message: "",
    stack: rst
  };
}

interface IStack {
  message: string;
  line: number;
  column: number;
  filename: string;
}

export function getStack(url: string): IStack {
  // http://192.168.31.8:8000/c.js:2:9
  const message = url.includes("@") ? url.split("@")[0] : "";
  const splitUrl = url.split(":");
  const row = splitUrl[splitUrl.length - 2];
  const column = splitUrl[splitUrl.length - 1];
  const fileName = splitUrl[0] + ':' + splitUrl[1] + ':' + splitUrl[2];
  return {
    message,
    line: Number(row) as number,
    column: Number(column) as number,
    filename: fileName
  };
}

export function getEfficientUrl(str: string): string | null {
  const reg = /http.*:\d+:\d+/;
  return reg.exec(str) ? (reg.exec(str) as any[])[0] : "";
}
