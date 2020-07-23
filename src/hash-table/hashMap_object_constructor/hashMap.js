const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

const Node = function (key, value, next = null) {
  this.key = key;
  this.value = value;
  this.next = next;
};

const HashMap = function (defaultLimit = 1000) {
  this.limit = defaultLimit;
  this.buckets = new Array(this.limit).fill(null).map(() => new LinkedList());
};

HashMap.prototype.put = function (key, value) {
  const hashCode = this.hash(key);
  const bucketList = this.buckets[hashCode];
  const node = this.find(key, hashCode);
  const newNode = new Node(key, value);

  if (!node && !bucketList.head) {
    bucketList.head = newNode;
    bucketList.tail = newNode;

    return;
  }

  if (!node) {
    bucketList.tail.next = newNode;
    bucketList.tail = newNode;
  } else {
    node.value = value;
  }
};

HashMap.prototype.get = function (key) {
  const hashCode = this.hash(key);
  const node = this.find(key, hashCode);

  if (!node) {
    return -1;
  } else {
    return node.value;
  }
};

HashMap.prototype.remove = function (key) {
  const bucketList = this.buckets[this.hash(key)];

  if (!bucketList.head) {
    return;
  }

  if (bucketList.head.key === key) {
    if (bucketList.head === bucketList.tail) {
      bucketList.head = null;
      bucketList.tail = null;
    } else {
      bucketList.head = bucketList.head.next;
    }
    return;
  }

  let currentNode = bucketList.head,
    deletedNode;
  while (currentNode && currentNode.next) {
    if (currentNode.next.key === key) {
      deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;

      if (deletedNode === bucketList.tail) {
        bucketList.tail = currentNode;
      }

      return;
    }

    currentNode = currentNode.next;
  }
};

HashMap.prototype.find = function (key, hash) {
  const bucketList = this.buckets[hash];

  if (!bucketList.head) {
    return null;
  }

  let currentNode = bucketList.head;
  while (currentNode) {
    if (currentNode.key === key) {
      return currentNode;
    } else {
      currentNode = currentNode.next;
    }
  }

  return null;
};

HashMap.prototype.hash = function (key) {
  let hashCode = 0,
    str = key.toString();

  for (let i = 0; i < str.length; i++) {
    hashCode += str.charCodeAt(i);
  }

  return hashCode % this.limit;
};

module.exports = HashMap;
