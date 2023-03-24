import {Queue} from '../structures/queue';

describe('Queue: ', () => {
  let queue = new Queue();

  beforeEach(() => {
    queue = new Queue();
  });

  test('Should add the value in the queue', () => {
    queue.enqueue('some');

    expect(queue.peek()).toBe('some');
    expect(queue.size()).toBe(1);
  });

  test('Should remove the value out of the queue', () => {
    queue.enqueue('some');

    expect(queue.dequeue()).toBe('some');
    expect(queue.size()).toBe(0);
  });

  test('Should dequeue a first in value', () => {
    queue
    .enqueue('some')
    .enqueue('body')
    .enqueue('once');

    expect(queue.dequeue()).toBe('some');
    expect(queue.dequeue()).toBe('body');
    expect(queue.dequeue()).toBe('once');
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('Should be empty if the queue is emty', () => {
    queue.enqueue(1);
    queue.dequeue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  test('Should return a right size of the queue', () => {
    queue
    .enqueue(1)
    .enqueue(2);

    expect(queue.size()).toBe(2);
  });

  test('Should clear the queue', () => {
    queue
    .enqueue(1)
    .enqueue(2)
    .enqueue(3)
    .clear();

    expect(queue.size()).toBe(0);
  });

  test('Should show a next element of the queue', () => {
    queue
    .enqueue(1)
    .enqueue(2);

    expect(queue.peek()).toBe(1);

    queue.dequeue();

    expect(queue.peek()).toBe(2);
  });

  test('Should return undefined when the queue is empty', () => {
    expect(queue.dequeue()).toBeUndefined();
  });
});
