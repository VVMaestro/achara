import {ListNode} from './ListNode';

interface Comparator<ValueType> {
  (first: ValueType, second: ValueType): number
}

export class LinkedList<ValueType> implements Iterable<ValueType> {
  head: ListNode<ValueType> | null = null;

  tail: ListNode<ValueType> | null = null;

  comparator: Comparator<ValueType>;

  constructor(comparator: Comparator<ValueType>) {
    this.comparator = comparator ?? this.defaultComparator;
  }

  public append(value: ValueType) {
    const newNode = new ListNode(value);

    if (this.tail) {
      this.tail.nextNode = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  public prepend(value: ValueType) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  public delete(value: ValueType) {
    if (!this.head || !this.tail) {
      return;
    }

    while(this.head && this.comparator(this.head.value, value) === 0) {
      this.head = this.head.nextNode;
    }

    let current = this.head;

    if (current !== null) {
      while(current.nextNode) {
        if (this.comparator(current.value, value) === 0) {
          current.nextNode = current.nextNode.nextNode;
        } else {
          current = current.nextNode;
        }
      }
    }

    if (this.comparator(this.tail.value, value) === 0) {
      this.tail = current;
    }
  }

  public forEach(callback: (value: ValueType) => void) {
    let current = this.head;

    while(current) {
      callback(current.value);

      current = current.nextNode;
    }
  }

  public find(value: ValueType): ListNode<ValueType> | null {
    if (!this.head) return null;

    let current: ListNode<ValueType> | null = this.head;

    while(current) {
      if (this.comparator(current.value, value) === 0) {
        return current;
      }

      current = current.nextNode;
    }

    return null;
  }

  private defaultComparator: Comparator<ValueType> = (first, second) => {
    if (first < second) {
      return -1;
    }

    if (second > first) {
      return 1;
    }

    return 0;
  }

  *[Symbol.iterator](): Generator<ValueType> {
    let current = this.head;

    while(current) {
      yield current.value;

      current = current.nextNode;
    }
  }
}
