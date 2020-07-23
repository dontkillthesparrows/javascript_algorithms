const HashSet = require('./hashSet');

test('should generate proper hash for specified keys', () => {
  const set = new HashSet();

  expect(set.hash(1)).toBe(49);
  expect(set.hash(2)).toBe(50);
  expect(set.hash(12)).toBe(99);
  expect(set.hash('a')).toBe(97);
  expect(set.hash('b')).toBe(98);
  expect(set.hash('abc')).toBe(94);

  const largeSet = new HashSet(1000);

  expect(largeSet.hash(1)).toBe(49);
  expect(largeSet.hash(2)).toBe(50);
  expect(largeSet.hash(12)).toBe(99);
  expect(largeSet.hash('a')).toBe(97);
  expect(largeSet.hash('b')).toBe(98);
  expect(largeSet.hash('abc')).toBe(294);
});

test('should add, remove and find containing keys', () => {
  const set = new HashSet();

  expect(set.add(36)).not.toBeDefined();
  expect(set.add(2)).not.toBeDefined();
  expect(set.add(73)).not.toBeDefined();
  expect(set.contains(73)).toBe(true);
  expect(set.contains(4)).toBe(false);
  expect(set.contains(2)).toBe(true);
  expect(set.remove(2)).not.toBeDefined();
  expect(set.contains(2)).toBe(false);
  expect(set.add(2)).not.toBeDefined();
  expect(set.contains(2)).toBe(true);
  expect(set.add(73)).not.toBeDefined();
  expect(set.contains(73)).toBe(true);
});
