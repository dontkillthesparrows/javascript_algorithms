function fibonacci(n, hash) {
  hash = hash || {};

  if (hash[n]) return hash[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  return (hash[n] = fibonacci(n - 1, hash) + fibonacci(n - 2, hash));
}

module.exports = fibonacci;
