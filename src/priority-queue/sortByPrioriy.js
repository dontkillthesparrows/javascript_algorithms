const sortByPrioriy = function (array) {
  let container = new Array(array.length).fill(null);

  for (let [value, priority] of array) {
    let index = priority;

    while (container[index] !== null && container[index][1] < priority) {
      index++;
    }

    container.splice(index, 0, [value, priority]);
    container.indexOf(null)
      ? container.splice(container.indexOf(null), 1)
      : undefined;
  }

  return container;
};

sortByPrioriy([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);

//[[5, 0], [7, 0], [6, 1], [7, 1], [5, 2], [4, 4]]
