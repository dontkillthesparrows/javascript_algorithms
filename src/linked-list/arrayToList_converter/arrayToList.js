const ListNode = function (value, next = null) {
  this.value = value;
  this.next = next;
};

const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

function arrayToList(arr) {
  const list = new LinkedList();

  function node(index = 0) {
    if (index < arr.length) {
      return new ListNode(arr[index], node(index + 1));
    }

    return null;
  }

  let currentNode = node();

  if (!list.head) list.head = currentNode;

  while (currentNode) {
    if (!currentNode.next) {
      list.tail = currentNode;
    }
    currentNode = currentNode.next;
  }

  return list;
}
