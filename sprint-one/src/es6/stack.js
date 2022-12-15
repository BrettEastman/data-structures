class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    var storageLength = Object.keys(this.storage).length;
    this.storage[storageLength] = value;
  }

  pop() {
    var storageLength = Object.keys(this.storage).length;
    var result = this.storage[storageLength - 1];
    delete this.storage[storageLength - 1];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}