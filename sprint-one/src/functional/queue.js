// I
// O
// C
// E

// Justification
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // store variable for beginning and end
  var firstInd = 0;
  var lastInd = -1;

  someInstance.storage = storage;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // enqueue will be to add the last one to the back of the pack
    // in other words, add to storage numerically with enqueue, then later use dequeue to remove from the front
    storage[lastInd + 1] = value;
    lastInd++;
  };

  someInstance.dequeue = function() {
    // remove from the front of the stack
    var result = storage[firstInd];
    delete storage[firstInd];
    firstInd++;
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var newQueue = Queue();

newQueue.enqueue('word');
newQueue.enqueue('word2');
newQueue.enqueue('word3');
console.log(newQueue.storage);
newQueue.dequeue();
console.log(newQueue.storage);