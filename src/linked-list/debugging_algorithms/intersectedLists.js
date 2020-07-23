const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  var currentA = headA;
  var currentB = headB;
  while (currentA != currentB) {
    currentA = currentA == null ? headB : currentA.next;
    currentB = currentB == null ? headA : currentB.next;
  }
  return currentA;
};
