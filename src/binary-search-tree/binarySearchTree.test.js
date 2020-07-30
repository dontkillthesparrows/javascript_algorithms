const BinarySearchTree = require('./binarySearchTree');

test('should insert nodes in right place and find them', () => {
  const tree = new BinarySearchTree();

  expect(tree.insert(350).value).toBe(350);
  expect(tree.insert(345).value).toBe(345);
  expect(tree.insert(340).value).toBe(340);
  expect(tree.insert(335).value).toBe(335);
  expect(tree.insert(330).value).toBe(330);
  expect(tree.insert(355).value).toBe(355);
  expect(tree.insert(360).value).toBe(360);
  expect(tree.insert(365).value).toBe(365);
  expect(tree.insert(345).value).toBe(345);

  expect(tree.find(345).value).toBe(345);
  expect(tree.find(330).value).toBe(330);
  expect(tree.find(350).value).toBe(350);
  expect(tree.find(360).value).toBe(360);
  expect(tree.find(365).value).toBe(365);
});

test('should set data to existing node', () => {
  const tree = new BinarySearchTree();

  expect(tree.insert(350).value).toBe(350);
  expect(tree.insert(345).value).toBe(345);
  expect(tree.find(345).setData('bumbibjörnarna')).toEqual(
    expect.objectContaining({
      value: 345,
      data: 'bumbibjörnarna',
    })
  );
});

test('should update value on existing node', () => {
  const tree = new BinarySearchTree();

  expect(tree.insert(350).value).toBe(350);
  expect(tree.insert(345).value).toBe(345);
  expect(tree.find(345).setValue(346)).toEqual(
    expect.objectContaining({
      value: 346,
    })
  );
});

test('should delete nodes correct', () => {
  const tree = new BinarySearchTree();

  expect(tree.insert(350).value).toBe(350);
  expect(tree.insert(345).value).toBe(345);
  expect(tree.insert(346).value).toBe(346);
  expect(tree.insert(330).value).toBe(330);
  expect(tree.insert(335).value).toBe(335);
  expect(tree.insert(360).value).toBe(360);
  expect(tree.insert(355).value).toBe(355);
  expect(tree.insert(365).value).toBe(365);

  expect(tree.remove(330)).toBe(true);
  expect(tree.contains(330)).toBe(false);
  expect(tree.insert(330).value).toBe(330);
  expect(tree.contains(330)).toBe(true);
  expect(tree.remove(355)).toBe(true);
  expect(tree.contains(355)).toBe(false);
  expect(tree.insert(356).value).toBe(356);
  expect(tree.remove(350)).toBe(true);
  expect(tree.contains(350)).toBe(false);
  expect(tree.insert(340).value).toBe(340);

  expect(tree.remove(340)).toBe(true);
  expect(tree.remove(345)).toBe(true);
  expect(tree.remove(346)).toBe(true);
  expect(tree.remove(330)).toBe(true);
  expect(tree.remove(335)).toBe(true);
  expect(tree.remove(360)).toBe(true);
  expect(tree.remove(365)).toBe(true);
});

test('should return traversed tree as string', () => {
  const tree = new BinarySearchTree();

  expect(tree.insert(350).value).toBe(350);
  expect(tree.insert(345).value).toBe(345);
  expect(tree.insert(346).value).toBe(346);
  expect(tree.insert(330).value).toBe(330);
  expect(tree.insert(335).value).toBe(335);
  expect(tree.insert(360).value).toBe(360);
  expect(tree.insert(355).value).toBe(355);
  expect(tree.insert(365).value).toBe(365);

  expect(tree.toString()).toEqual(
    expect.stringContaining('330,335,345,346,350,355,360,365')
  );
});

test('should return the smallest and the biggest value in the tree', () => {
  const tree = new BinarySearchTree();

  expect(tree.insert(350).value).toBe(350);
  expect(tree.insert(345).value).toBe(345);
  expect(tree.insert(346).value).toBe(346);
  expect(tree.insert(330).value).toBe(330);
  expect(tree.insert(335).value).toBe(335);
  expect(tree.insert(360).value).toBe(360);
  expect(tree.insert(355).value).toBe(355);
  expect(tree.insert(365).value).toBe(365);

  expect(tree.findMin()).toEqual(
    expect.objectContaining({
      value: 330,
    })
  );
  expect(tree.findMax()).toEqual(
    expect.objectContaining({
      value: 365,
    })
  );

  expect(tree.remove(365)).toBe(true);
  expect(tree.remove(330)).toBe(true);

  expect(tree.findMin()).toEqual(
    expect.objectContaining({
      value: 335,
    })
  );
  expect(tree.findMax()).toEqual(
    expect.objectContaining({
      value: 360,
    })
  );
});
