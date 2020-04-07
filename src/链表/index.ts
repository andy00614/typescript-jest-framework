class LinkListNode<T> {
  constructor(public element: T, public next?: LinkListNode<T>) {}
}

export default class MyLinkedList {
  // todo: 这里如何给类型更好
  public head: LinkListNode<any> | null = null;
  public count = 0;
  get(index: number) {
    if (index > this.count || index < 0) {
      return -1;
    }
    let i = 0;
    let rst = this.head;
    while (rst!.next) {
      if (i === index) {
        break;
      }
      rst = rst!.next;
      i++;
    }
    return rst!.element;
  }
  addAtHead(val: any) {
    const newHead = new LinkListNode(val);
    if (this.head) newHead.next = this.head;
    this.head = newHead;
    this.count++;
  }
  addAtTail(val: any) {
    const tailNode = new LinkListNode(val);
    if (!this.head) {
      this.head = tailNode;
      this.count++;
      return this.head;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = tailNode;
    this.count++;
  }
  addAtIndex(index: number, val: any) {
    if (index === this.count) {
      return this.addAtTail(val);
    } else if (index <= 0) {
      return this.addAtHead(val);
    } else if (index > this.count) {
      return;
    }
    // todo: 这里的类型该怎么给
    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      curNode = curNode?.next as LinkListNode<any>;
    }
    const nextNode = curNode?.next;
    const insertedNode = new LinkListNode(val);
    curNode!.next = insertedNode;
    insertedNode.next = nextNode;
    this.count++;
  }
  deleteAtIndex(index: number) {
    if (index < 0 || index > this.count) {
      return;
    }
    if (index === 0) {
      if (this.head?.next) {
        this.count --;
        return this.head = this.head?.next;
      }
      this.count --;
      return this.head = null;
    }
    let pre = this.head;
    for (let i = 0; i < index-1; i++) {
      pre = pre?.next as LinkListNode<any>;
    }
    const curNode = pre?.next
    const nextNode = curNode?.next
    pre!.next = nextNode
    this.count--;
  }
}
