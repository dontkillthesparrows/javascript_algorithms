const orderlyQueue = require('./orderlyQueue');

test('should return smallest lexicgraphically string possible', () => {
  expect(orderlyQueue('cba', 1)).toBe('acb');
  expect(orderlyQueue('baaca', 3)).toBe('aaabc');
  expect(orderlyQueue('mclpx', 5)).toBe('clmpx');
  expect(orderlyQueue('gxzv', 4)).toBe('gvxz');
  expect(
    orderlyQueue(
      'xitavoyjqiupzadbdyymyvuteolyeerecnuptghlzsynozeuuvteryojyokpufanyrqqmtgxhyycltlnusyeyyqygwupcaagtkuq',
      1
    )
  ).toBe(
    'aagtkuqxitavoyjqiupzadbdyymyvuteolyeerecnuptghlzsynozeuuvteryojyokpufanyrqqmtgxhyycltlnusyeyyqygwupc'
  );
});
