const HashSet = function (defaultLimit = 100) {
  this.limit = defaultLimit;
  this.buckets = new Array();
};

HashSet.prototype.hash = function (key) {
  let hashCode = 0,
    str = key.toString();

  for (let i = 0; i < str.length; i++) {
    hashCode += str.charCodeAt(i);
  }

  return hashCode % this.limit;
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

module.exports = HashSet;
