export class Stack<T> {
  private _stack: T[];

  constructor() {
    this._stack = [];
  }

  public push(item: T): void {
    this._stack.push(item);
  }

  public pop(): T | undefined {
    return this._stack.pop();
  }

  public peek(): T | undefined {
    return this._stack[this._stack.length - 1];
  }

  public size(): number {
    return this._stack.length;
  }

  public clear(): void {
    this._stack = [];
  }
}
