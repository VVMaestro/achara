export class ListNode<T> {
  public value: T;

  public nextNode: ListNode<T> | null = null;

  constructor(value: T, next?: ListNode<T> | null) {
    this.value = value;

    if (next) {
      this.nextNode = next;
    }
  }
}
