export default class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString = function (callback) {
    return callback ? callback(this.value) : `${this.value}`;
  };
}
