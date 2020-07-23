const fibonacci = require('./fibonacci-loop');

test('should generate correct fibonacci value with given index', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(10)).toBe(55);
  expect(fibonacci(14)).toBe(377);
});
