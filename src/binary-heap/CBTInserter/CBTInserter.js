function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const CBTInserter = function (root) {
  this.container = [];
  this.traverse(root);
};

CBTInserter.prototype.insert = function (v) {
  const newNode = new TreeNode(v);

  let parent = this.container[Math.floor((this.container.length - 1) / 2)];

  this.container.push(newNode);

  if (!parent.left) {
    parent.left = newNode;
  } else if (!parent.right) {
    parent.right = newNode;
  }

  return parent.val;
};

CBTInserter.prototype.get_root = function () {
  return this.container.length ? this.container[0] : null;
};

CBTInserter.prototype.traverse = function (node) {
  let array = [];

  array.push(node);

  while (array.length > 0) {
    let n = array.shift();
    this.container.push(n);

    if (n.left) array.push(n.left);
    if (n.right) array.push(n.right);
  }
};
