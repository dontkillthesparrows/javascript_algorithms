const isCompleteTree = function (root) {
  let queue = [root],
    leaf = false;

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      if (leaf) return false;
      queue.push(node.left);
    } else {
      leaf = true;
    }

    if (node.right) {
      if (leaf) return false;
      queue.push(node.right);
    } else {
      leaf = true;
    }
  }

  return true;
};
