import { ASCIIhash as hash } from './hash.mjs';
import LinkedList from '../linked-list/linkedList/LinkedList.mjs';

const defaultBuckets = 32;

export default class HashTable {
  constructor(bucketLimit = defaultBuckets) {
    this.buckets = new Array(bucketLimit)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  set(key, value) {
    const hashKey = hash(key, defaultBuckets);
    this.keys[key] = hashKey;
    const bucketList = this.buckets[hashKey];
    const node = bucketList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (!node) {
      bucketList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  get(key) {
    const bucketList = this.buckets[hash(key, defaultBuckets)];
    const node = bucketList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (!node) {
      return null;
    } else {
      return node.value;
    }
  }

  delete(key) {
    const bucketList = this.buckets[hash(key, defaultBuckets)];
    const deletedNode = bucketList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (deletedNode) {
      bucketList.delete(deletedNode.value);
      delete this.keys[key];
    }

    return deletedNode;
  }

  has(key) {
    return this.keys.hasOwnProperty(key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}
