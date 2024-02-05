export default class CQueue<T> {
  public queue: Array<T>;
  public front: number;
  public rear: number;
  public k: number;

  constructor(size = 5) {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.k = size;
  }
  enqueue(value: T) {
    if (
      (this.front === 0 && this.rear === this.k - 1) ||
      this.front === this.rear + 1
    ) {
      console.log("Queue is full");
      return;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.k;
    this.queue[this.rear] = value;
  }

  deque(): T | undefined {
    if (this.front === -1) {
      console.log("Queue is empty");
      return undefined;
    }
    let val: T = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.k;
    }

    return val;
  }

  peek(): T | undefined {
    return this.queue[this.front];
  }
}
