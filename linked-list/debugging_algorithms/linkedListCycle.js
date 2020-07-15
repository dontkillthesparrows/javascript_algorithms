const hasCycle = function (linkedList) {
  let snail = linkedList;
  let rabbit = linkedList;

  while (rabbit && rabbit.next) {
    snail.next;
    rabbit.next.next;

    if (rabbit === snail) {
      return true;
    }
  }
  return false;
};

const detectCycle = function (head) {
  let currentNode = head;

  const set = new Set();

  while (currentNode) {
    if (set.has(currentNode)) {
      return currentNode;
    }
    set.add(currentNode);
    currentNode = currentNode.next;
  }

  return null;
};
