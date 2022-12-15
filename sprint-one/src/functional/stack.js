// I
// O whatever we add to it or take away from it
// C
// E

// Justification: to learn how to create a stack data structure - last in, first out
// Explanation: Stack is a function which creates the data structure for a stack and it includes a few methods
// 1. putting information on the stack
// 2. taking information off the stack
// 3. checking the size of the stack
var Stack = function() {
  var someInstance = {};
  // leave as is, we are adding properties below

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.storage = storage;

  // Implement the methods below
  someInstance.push = function(value) {
    // if we are putting in new information, use push to push it to the back of the stack
    // implement native push method for arrays, but for objects
    var storageLength = Object.keys(storage).length;
    storage[storageLength] = value;
  };

  someInstance.pop = function() {
    // if we are taking information out, use pop to pop it off the back of the stack
    // implement native pop method for arrays, but for objects
    var storageLength = Object.keys(storage).length;
    var result = storage[storageLength - 1];
    delete storage[storageLength - 1];
    return result;
  };

  someInstance.size = function() {
    // use Object.keys to get the length of the object?
    return Object.keys(storage).length;
  };

  return someInstance;
};

var newStack = Stack();

newStack.push('word');
newStack.push('word2');
newStack.push('word3');
console.log(newStack.storage);
newStack.pop();
console.log(newStack.storage);

