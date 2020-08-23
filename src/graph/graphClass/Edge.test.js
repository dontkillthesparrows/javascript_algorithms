const Vertex = require('./Vertex');
const Edge = require('./Edge');

describe('should have correct edge implementation', () => {
  test('should return edge key', () => {
    const A = new Vertex('A');
    const B = new Vertex('B');
    const AB = new Edge(A, B);

    expect(AB.getKey()).toBe('A_B');
    expect(AB.toString()).toBe('A_B');
  });
});
