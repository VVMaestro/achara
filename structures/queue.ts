export class Queue<T> {
  private itemList: T[] = [];

  public add(item: T): void {
    this.itemList.push(item);
  }

  public pickNextItem(): T | null {
    return this.itemList.shift() ?? null;
  }

  public clear(): void {
    this.itemList = [];
  }
}
