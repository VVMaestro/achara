export class Queue<T> {
  private _queue: T[];

  constructor() {
    this._queue = [];
  }

  public enqueue(item: T): void {
    this._queue.push(item);
  }

  public dequeue(): T | undefined {
    return this._queue.shift();
  }

  public peek(): T | undefined {
    return this._queue[0];
  }

  public isEmpty(): boolean {
    return this._queue.length === 0;
  }

  public size(): number {
    return this._queue.length;
  }

  public clear(): void {
    this._queue = [];
  }
}
