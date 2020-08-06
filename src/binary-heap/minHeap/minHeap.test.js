const MinHeap = require('./minHeap');

describe('should have correct implementation keeping shape and heap property', () => {
  test('should create empty heap', () => {
    const minHeap = new MinHeap();

    expect(minHeap).toBeDefined();
    expect(minHeap.isEmpty()).toBe(true);
  });

  test('should add and find items', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.find(3)).toStrictEqual([0]);
    minHeap.add(4);
    minHeap.add(6);
    expect(minHeap.peek()).toBe(3);
    minHeap.add(2);
    expect(minHeap.peek()).toBe(2);
    minHeap.add(1);
    expect(minHeap.peek()).toBe(1);
  });
});
