const bucketLimit = 100;

const HashSet = function (limit = bucketLimit) {
  this.limit = limit;
  this.buckets = new Array();
};

HashSet.prototype.hash = function (key) {
  return key % this.limit;
};

HashSet.prototype.add = function (key) {
  const hashCode = this.hash(key);

  if (!this.buckets[hashCode]) {
    this.buckets[hashCode] = [];
  }

  if (!this.contains(key)) {
    this.buckets[hashCode].push(key);
  }
};

HashSet.prototype.remove = function (key) {
  const hashCode = this.hash(key);
  const bucket = this.buckets[hashCode];

  if (!bucket) {
    return;
  }

  if (this.contains(key)) {
    bucket.splice(bucket.indexOf(key), 1);
  }
};

HashSet.prototype.contains = function (key) {
  const hashCode = this.hash(key);

  if (!this.buckets[hashCode]) {
    return false;
  }

  if (this.buckets[hashCode].indexOf(key) !== -1) {
    return true;
  } else {
    return false;
  }
};
