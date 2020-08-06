const Comparator = require('./comparator');

test('should test against default comparator', () => {
  const comparator = new Comparator();

  expect(comparator.equal(4, 4)).toBe(true);
  expect(comparator.equal(3, 5)).toBe(false);
  expect(comparator.greaterThan(4, 3)).toBe(true);
  expect(comparator.greaterThan(4, 7)).toBe(false);
  expect(comparator.lessThan(3, 6)).toBe(true);
  expect(comparator.lessThan(6, 3)).toBe(false);
  expect(comparator.greaterThanOrEqualTo(6, 3)).toBe(true);
  expect(comparator.greaterThanOrEqualTo(6, 6)).toBe(true);
  expect(comparator.greaterThanOrEqualTo(3, 6)).toBe(false);
  expect(comparator.lessThanOrEqualTo(4, 8)).toBe(true);
  expect(comparator.lessThanOrEqualTo(4, 4)).toBe(true);
  expect(comparator.lessThanOrEqualTo(8, 4)).toBe(false);
});
