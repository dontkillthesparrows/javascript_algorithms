const MinHeap = require('./minHeap');
const Comparator = require('../../utils/comparator');

describe('should have correct implementation keeping shape and heap property', () => {
  test('should create empty heap', () => {
    const minHeap = new MinHeap();

    expect(minHeap).toBeDefined();
    expect(minHeap.isEmpty()).toBe(true);
  });

  it('should be possible to find item indices', () => {
    const minHeap = new MinHeap();

    minHeap.add(1);
    minHeap.add(2);
    minHeap.add(3);
    minHeap.add(4);
    minHeap.add(4);

    expect(minHeap.toString()).toBe('1,2,3,4,4');

    expect(minHeap.find(6)).toStrictEqual([]);
    expect(minHeap.find(3)).toStrictEqual([2]);
    expect(minHeap.find(4)).toStrictEqual([3, 4]);
  });

  it('should poll items and heapify it down', () => {
    const minHeap = new MinHeap();

    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(1);

    expect(minHeap.toString()).toBe('1,3,10,11,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('3,5,10,11');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,11,10');

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.toString()).toBe('10,11');

    expect(minHeap.poll()).toBe(10);
    expect(minHeap.toString()).toBe('11');

    expect(minHeap.poll()).toBe(11);
    expect(minHeap.toString()).toBe('');

    expect(minHeap.poll()).toBeNull();
    expect(minHeap.toString()).toBe('');
  });

  test('should return if value exists in heap', () => {
    const minHeap = new MinHeap();

    minHeap.add(7);
    minHeap.add(6);
    minHeap.add(14);

    expect(minHeap.has(5)).toBe(false);
    expect(minHeap.has(6)).toBe(true);
    expect(minHeap.has(14)).toBe(true);

    minHeap.remove(14);
    expect(minHeap.has(14)).toBe(false);
  });

  test('should add items and heapify it', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.toString()).toBe('3');

    minHeap.add(4);
    minHeap.add(6);
    expect(minHeap.peek()).toBe(3);

    minHeap.add(2);
    expect(minHeap.peek()).toBe(2);

    minHeap.add(1);
    minHeap.add(4);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toStrictEqual('1,2,4,4,3,6');
  });

  it('should be possible to remove items from heap with heapifyDown', () => {
    const minHeap = new MinHeap();

    minHeap.add(6);
    minHeap.add(23);
    minHeap.add(8);
    minHeap.add(14);
    minHeap.add(14);

    expect(minHeap.toString()).toBe('6,14,8,23,14');

    expect(minHeap.remove(6).toString()).toEqual('8,14,14,23');
    expect(minHeap.remove(6).peek()).toEqual(8);
    expect(minHeap.remove(14).toString()).toEqual('8,23');
    expect(minHeap.remove(6).peek()).toEqual(8);
  });

  it('should be possible to remove items from heap with heapifyUp', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(5);
    minHeap.add(6);
    minHeap.add(7);
    minHeap.add(4);
    minHeap.add(6);
    minHeap.add(8);
    minHeap.add(2);
    minHeap.add(1);

    expect(minHeap.toString()).toBe('1,2,4,6,3,5,6,10,8,7');
    expect(minHeap.remove(8).toString()).toEqual('1,2,4,6,3,5,6,10,7');
    expect(minHeap.remove(7).toString()).toEqual('1,2,4,6,3,5,6,10');
    expect(minHeap.remove(1).toString()).toEqual('2,3,4,6,10,5,6');
    expect(minHeap.remove(2).toString()).toEqual('3,6,4,6,10,5');
    expect(minHeap.remove(6).toString()).toEqual('3,5,4,10');
    expect(minHeap.remove(10).toString()).toEqual('3,5,4');
    expect(minHeap.remove(5).toString()).toEqual('3,4');
    expect(minHeap.remove(3).toString()).toEqual('4');
    expect(minHeap.remove(4).toString()).toEqual('');
  });

  it('should be possible to remove items from heap with custom comparator', () => {
    const minHeap = new MinHeap();
    minHeap.add('dddd');
    minHeap.add('ccc');
    minHeap.add('bb');
    minHeap.add('a');

    expect(minHeap.toString()).toBe('a,bb,ccc,dddd');

    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    minHeap.remove('hej', comparator);
    expect(minHeap.toString()).toBe('a,bb,dddd');
  });
});
