const HashMap = require('./hashMap');

test('should generate proper hash for specified keys', () => {
  const hashMap = new HashMap(100);

  expect(hashMap.hash(1)).toBe(49);
  expect(hashMap.hash(2)).toBe(50);
  expect(hashMap.hash(12)).toBe(99);
  expect(hashMap.hash('a')).toBe(97);
  expect(hashMap.hash('b')).toBe(98);
  expect(hashMap.hash('abc')).toBe(94);
});

test('should generate proper hash for specified keys', () => {
  const hashMap = new HashMap();

  expect(hashMap.hash(1)).toBe(49);
  expect(hashMap.hash(2)).toBe(50);
  expect(hashMap.hash(12)).toBe(99);
  expect(hashMap.hash('a')).toBe(97);
  expect(hashMap.hash('b')).toBe(98);
  expect(hashMap.hash('abc')).toBe(294);
});

test('should put, get and remove (key, value) pairs', () => {
  const hashMap = new HashMap(26);

  expect(hashMap.put(36, 'unicorn')).not.toBeDefined();
  expect(hashMap.put(2, 'ape')).not.toBeDefined();
  expect(hashMap.put(73, 'lion king')).not.toBeDefined();
  expect(hashMap.get(73)).toBe('lion king');
  expect(hashMap.get(4)).toBe(-1);
  expect(hashMap.remove(2)).not.toBeDefined();
  expect(hashMap.get(2)).toBe(-1);
  expect(hashMap.put(2, 'snake')).not.toBeDefined();
  expect(hashMap.get(2)).toBe('snake');
  expect(hashMap.put(73, 'lion')).not.toBeDefined();
  expect(hashMap.get(73)).toBe('lion');
});

test('should delete, add and get tail in linked list correctly', () => {
  const map = new HashMap();

  expect(map.put(54, 35)).not.toBeDefined();
  expect(map.put(36, 39)).not.toBeDefined();
  expect(map.put(63, 9)).not.toBeDefined();
  expect(map.put(72, 28)).not.toBeDefined();
  expect(map.remove(72)).not.toBeDefined();
  expect(map.get(63)).toBe(9);
  expect(map.get(54)).toBe(35);
  expect(map.get(72)).toBe(-1);
  expect(map.put(72, 31)).not.toBeDefined();
  expect(map.get(72)).toBe(31);
  expect(map.remove(72)).not.toBeDefined();
  expect(map.get(72)).toBe(-1);
});

test('should remove head in linked list correctly, when there is only one item', () => {
  const map = new HashMap();

  expect(map.put(24, 31)).not.toBeDefined();
  expect(map.remove(24)).not.toBeDefined();
  expect(map.get(24)).toBe(-1);
});

test('should remove head of linked list correctly, when list contains several inputs', () => {
  const map = new HashMap();

  expect(map.put(54, 35)).not.toBeDefined();
  expect(map.put(36, 39)).not.toBeDefined();
  expect(map.put(63, 9)).not.toBeDefined();
  expect(map.put(72, 28)).not.toBeDefined();
  expect(map.remove(54)).not.toBeDefined();
  expect(map.get(63)).toBe(9);
  expect(map.get(54)).toBe(-1);
});
