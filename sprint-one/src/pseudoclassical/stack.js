var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var storageLength = Object.keys(this.storage).length;
  this.storage[storageLength] = value;
};

Stack.prototype.pop = function() {
  var storageLength = Object.keys(this.storage).length;
  var result = this.storage[storageLength - 1];
  delete this.storage[storageLength - 1];
  return result;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};