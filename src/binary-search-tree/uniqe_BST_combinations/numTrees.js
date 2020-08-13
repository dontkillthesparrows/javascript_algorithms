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
