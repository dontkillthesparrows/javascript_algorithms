const TreeNode = function (value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
};

const SortedListToBST = function (head) {
  const nodeCount = this.countListNodes(head);

  return traverse(nodeCount);

  function traverse(count) {
    if (count <= 0) return null;

    const left = traverse(Math.floor(count / 2));
    const root = new TreeNode(head.value);
    root.left = left;
    head = head.next;
    root.right = traverse(count - Math.floor(count / 2) - 1);

    return root;
  }
};

SortedListToBst.prototype.countListNodes = function (head) {
  let count = 0;

  if (head) {
    let currentListNode = head;
    while (currentListNode) {
      count++;
      currentListNode = currentListNode.next;
    }
  }

  return count;
};
