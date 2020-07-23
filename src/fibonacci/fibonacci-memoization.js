function fibonacci(n, hash) {
  hash = hash || {};

  if (hash[n]) return hash[n];
  if (n < 2) return n;

  return (hash[n] = fibonacci(n - 1, hash) + fibonacci(n - 2, hash));
}

module.exports = fibonacci;
