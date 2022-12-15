var Queue = function() {

  this.storage = {};
  this.firstInd = 0;
  this.lastInd = -1;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastInd + 1] = value;
  this.lastInd++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.firstInd];
  delete this.storage[this.firstInd];
  this.firstInd++;
  return result;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};





