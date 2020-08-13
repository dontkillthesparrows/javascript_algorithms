const Comparator = require('../utils/comparator');
const MinHeap = require('../binary-heap/minHeap/minHeap');

class PriorityQueue extends MinHeap {
  constructor() {
    super();
    this.priority = new Map();
    this.compare = new Comparator(this.comparePriority.bind(this));
  }

  comparePriority(a, b) {
    if (this.priority.get(a) === this.priority.get(b)) return 0;
    return this.priority.get(a) < this.priority.get(b) ? -1 : 1;
  }

  compareValue(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }

  add(item, priority) {
    super.add(item);
    this.priority.set(item, priority);
    return this;
  }

  remove(item, customComparator) {
    super.remove(item, customComparator);
    this.priority.delete(item);
    return this;
  }

  changePriority(item, newPriority) {
    this.remove(item, new Comparator(this.compareValue));
    this.add(item, newPriority);

    return this;
  }
}

const q = new PriorityQueue();
q.add(1, 2);
q.add(2, 1);
q.add(3, 3);
q.add(4, 1);
q.changePriority(2, 4);
q.remove(3);
