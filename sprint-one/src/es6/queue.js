class Queue {
  constructor() {
    this.storage = {};
    this.firstInd = 0;
    this.lastInd = -1;
  }

  enqueue(value) {
    this.storage[this.lastInd + 1] = value;
    this.lastInd++;
  }

  dequeue() {
    var result = this.storage[this.firstInd];
    delete this.storage[this.firstInd];
    this.firstInd++;
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}