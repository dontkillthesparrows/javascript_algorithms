//recursive binary search returning item
function binarySearch(arr, n) {
  let left = arr[0];
  let right = arr[arr.length - 1];
  let mid = Math.floor(arr.length / 2);

  if (left > right) {
    return new Error('array is not sorted');
  } else if (arr[mid] === n) {
    return arr[mid];
  } else if (n < arr[mid]) {
    binarySearch(arr.splice(0, mid), n);
  } else {
    binarySearch(arr.splice(mid, mid), n);
  }
}

//binarySearch([1, 3, 5, 6, 8, 9, 12, 14, 15, 16], 6);

//recursive binary ssearch returning index on n
function binarySearchForIndex(arr, n, clone) {
  const arrClone = clone || [...arr];
  let left = arr[0];
  let right = arr[arr.length - 1];
  let mid = Math.floor(arr.length / 2);

  if (left > right) {
    return new Error('array is not sorted');
  } else if (arr[mid] === n) {
    return arrClone.indexOf(n);
  } else if (n < arr[mid]) {
    binarySearchForIndex(arr.splice(0, mid), n, arrClone);
  } else {
    binarySearchForIndex(arr.splice(mid, mid), n, arrClone);
  }
}

binarySearchForIndex([1, 3, 5, 6, 8, 9, 12, 14, 15, 16], 6);
