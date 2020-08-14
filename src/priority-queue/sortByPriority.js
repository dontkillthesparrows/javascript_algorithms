const sortByPriority = function (array) {
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

const sortDecendingThenPriority = function (array) {
  array.sort((a, b) => (b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]));

  let container = [];

  for (let [value, priority] of array) {
    container.splice(priority, 0, [value, priority]);
  }

  return container;
};

module.exports = {
  sortByPriority,
  sortDecendingThenPriority,
};
