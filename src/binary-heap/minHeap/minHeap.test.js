const MinHeap = require('./minHeap');

describe('should have correct implementation keeping shape and heap property', () => {
  test('should create empty heap', () => {
    const minHeap = new MinHeap();

    expect(minHeap).toBeDefined();
    expect(minHeap.isEmpty()).toBe(true);
  });

  test('should add item', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.peek()).toBe(3);
  });
});
