/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
 * @param {number} n
 * @return {number}
 */

const numTrees = function (n) {
  const G = new Array(n + 1).fill(0);

  (G[0] = 1), (G[1] = 1);

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }

  return G[n];
};

numTrees(5);
// => 42

/**
 * F(i, n) = G(i-1)*G(n-i)
 *
 * G(n) represents the number of BST for a sequence of 1 to n
 * F(i, n), 1 <= i <= n is the Cardesian product** of number of BST from its left and right sub-trees,
 * where i is the root node and the range is from 1 to n.
 *
 * If F(3,7): where 2 is the root node, the total of node combinations is the Cartesian product of
 * [1,2] and [4,5,6,7].
 * Therefore F(3,7) = G(2) * G(4)
 *
 * G(n) = G(0) * G(n-1) + G(1) * G(n-2) + ... + G(n-1) * G(0)
 *
 *
 * (**the Cardesian product is the multiplication of sets with ordered content.
 * If A = {1,2} and B = {3,4} then the cardesian product is A*B = {1,3}, {2,4}, {1,4}, {2,3})
 */
