const {
  sortByPriority,
  sortDecendingThenPriority,
} = require('./sortByPriority');

test('should return sorted by priority', () => {
  const array = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ];

  expect(sortByPriority(array)).toStrictEqual([
    [5, 0],
    [7, 0],
    [6, 1],
    [7, 1],
    [5, 2],
    [4, 4],
  ]);
});

test('should sort decending by value, then increasing priority', () => {
  const array = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ];

  expect(sortDecendingThenPriority(array)).toStrictEqual([
    [5, 0],
    [7, 0],
    [5, 2],
    [6, 1],
    [4, 4],
    [7, 1],
  ]);

  const array2 = [
    [9, 0],
    [7, 0],
    [1, 9],
    [3, 0],
    [2, 7],
    [5, 3],
    [6, 0],
    [3, 4],
    [6, 2],
    [5, 2],
  ];

  expect(sortDecendingThenPriority(array2)).toStrictEqual([
    [3, 0],
    [6, 0],
    [7, 0],
    [5, 2],
    [3, 4],
    [5, 3],
    [6, 2],
    [2, 7],
    [9, 0],
    [1, 9],
  ]);
});
