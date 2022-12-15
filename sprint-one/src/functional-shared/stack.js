var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  var storage = {};
  newStack.storage = storage;
  _.extend(newStack, stackMethods);
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

