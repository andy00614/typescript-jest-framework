import MyLinkedList from "./index";

/** 3->2->1 */
function getInstance() {
  const instance = new MyLinkedList();
  instance.addAtHead(1);
  instance.addAtHead(2);
  instance.addAtHead(3);
  return instance;
}

const linkedExample = new MyLinkedList();

function printLinkedList(linkList: typeof linkedExample) {
  let node = linkList.head;
  const rst = [];
  while (node && typeof node.element !== null) {
    rst.push(node!.element);
    // @ts-ignore
    node = node.next;
  }
  return rst;
}

describe("链表方法测试", () => {
  it("addAtHead方法", () => {
    const instance = getInstance();
    expect(instance.count).toBe(3);
    expect(instance.head?.next?.element).toBe(2);
    expect(instance.head?.next?.next?.element).toBe(1);
    expect(instance.head?.element).toBe(3);
  });
  it("检测get方法", () => {
    const instance = getInstance();
    expect(instance.get(0)).toBe(3);
    expect(instance.get(1)).toBe(2);
    expect(instance.get(2)).toBe(1);
  });
  it("检测addAtTail方法", () => {
    const instance = new MyLinkedList();
    instance.addAtTail("last");
    expect(instance.count).toBe(1);
  });
});

describe("检测addAtIndex", () => {
  it("index<=0,相当于插入头部", () => {
    const instance = new MyLinkedList();
    instance.addAtIndex(0, 1);
    expect(instance.head?.element).toBe(1);
  });
  it("index=链表长度", () => {
    const instance = getInstance();
    instance.addAtIndex(3, "addAtIndex");
    expect(instance.count).toBe(4);
    const rst = printLinkedList(instance);
    expect(printLinkedList(instance).length).toBe(4);
    expect(rst[rst.length - 1]).toBe("addAtIndex");
  });
  it("index>链表长度,不插入啥", () => {
    const instance = getInstance();
    instance.addAtIndex(4, "addAtIndex");
    expect(instance.count).toBe(3);
    const rst = printLinkedList(instance);
    expect(printLinkedList(instance).length).toBe(3);
    expect(rst[rst.length - 1]).not.toBe("addAtIndex");
  });
});

describe("测试deleteAtIndex", () => {
  it("index无效的情况", () => {
    const instance = getInstance();
    instance.deleteAtIndex(4);
    expect(instance.count).toBe(3);
    instance.deleteAtIndex(-1);
    expect(instance.count).toBe(3);
  });
  it("index有效的情况", () => {
    const instance = getInstance();
    instance.deleteAtIndex(0);
    expect(instance.count).toBe(2);
    instance.deleteAtIndex(1);
    expect(instance.count).toBe(1);
    expect(instance.head?.element).toBe(2);
  });
  it("index有效的情况2", () => {
    const instance = getInstance();
    instance.addAtTail(0);
    expect(printLinkedList(instance)).toStrictEqual([3, 2, 1, 0]);
    instance.deleteAtIndex(2);
    expect(instance.count).toBe(3);
    expect(printLinkedList(instance)).toStrictEqual([3, 2, 0]);
  });
});

// des
