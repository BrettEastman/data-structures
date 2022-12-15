var Stack = function() {

  var newStack = Object.create(stackMethods);
  var storage = {};
  newStack.storage = storage;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var storageLength = Object.keys(this.storage).length;
  this.storage[storageLength] = value;
};

stackMethods.pop = function() {
  var storageLength = Object.keys(this.storage).length;
  var result = this.storage[storageLength - 1];
  delete this.storage[storageLength - 1];
  return result;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


