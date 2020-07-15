const c = '1 4 5 3 2';
const cost = c.split(' ').map((n) => parseInt(n));

const money = 4;

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === target - array[i]) {
        return [i, j];
      }
    }
  }
}

//twoSum(cost, money);

function twoSum2(array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], i);
  }

  for (let i = 0; i < array.length; i++) {
    let n = target - array[i];
    if (map.has(n) && map.get(n) !== i) {
      return [i, map.get(n)];
    }
  }
}

//twoSum2(cost, money);

function twoSum3(array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let n = target - array[i];
    if (map.has(n)) {
      return [map.get(n), i];
    }
    map.set(array[i], i);
  }
}

twoSum3(cost, money);
