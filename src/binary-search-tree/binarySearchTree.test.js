const binarySearchTreeNode = require('./binarySearchTreeNode');
const BinarySearchTree = require('./binarySearchTree');

test('should insert nodes in right place and find them', () => {
  const tree = new BinarySearchTree();

  expect(tree.insert(350)).toBe(null);
  expect(tree.insert(345).value).toBe(345);
  expect(tree.insert(340).value).toBe(340);
  expect(tree.insert(335).value).toBe(335);
  expect(tree.insert(330).value).toBe(330);
  expect(tree.insert(355).value).toBe(355);
  expect(tree.insert(360).value).toBe(360);
  expect(tree.insert(365).value).toBe(365);

  expect(tree.find(345).value).toBe(345);
  expect(tree.find(330).value).toBe(330);
  expect(tree.find(350).value).toBe(350);
  expect(tree.find(360).value).toBe(360);
  expect(tree.find(365).value).toBe(365);
});
