var Queue = function() {
  var newQueue = Object.create(queueMethods);
  var storage = {};
  newQueue.storage = storage;
  newQueue.firstInd = 0;
  newQueue.lastInd = -1;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.lastInd + 1] = value;
  this.lastInd++;
};

queueMethods.dequeue = function() {
  var result = this.storage[this.firstInd];
  delete this.storage[this.firstInd];
  this.firstInd++;
  return result;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


