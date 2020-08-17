var orderlyQueue = function (S, K) {
  if (K > 1) {
    return S.split('').sort().join('');
  } else {
    let result = S;
    for (let i = 1; i < S.length; i++) {
      let temp = S.substring(i) + S.substring(0, i);
      if (temp < result) result = temp;
    }

    return result;
  }
};

module.exports = orderlyQueue;
