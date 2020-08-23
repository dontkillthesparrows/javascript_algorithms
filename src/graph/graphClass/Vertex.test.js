const Vertex = require('./Vertex');
const Edge = require('./Edge');

describe('should have correct Vertex implementation', () => {
  test('should return vertex value', () => {
    const A = new Vertex('A');

    expect(A.getValue()).toBe('A');
    expect(A.toString()).toBe('A');
  });

  test('should add and delete edges to vertex, and return true if edge is stored', () => {
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);
    const BC = new Edge(B, C);

    A.addEdge(AB);
    A.addEdge(AC);

    expect(A.hasEdge(AB)).toBe(true);
    expect(A.hasEdge(AC)).toBe(true);
    expect(A.hasEdge(BC)).toBe(false);

    A.deleteEdge(AB);

    expect(A.hasEdge(AB)).toBe(false);
  });

  test('should be able to find an edge given a specific neighbor vertex', () => {
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');
    const D = new Vertex('D');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    A.addEdge(AB);
    A.addEdge(AC);

    expect(A.findEdge(B)).toEqual(AB);
    expect(A.findEdge(C)).toEqual(AC);
    expect(A.findEdge(D)).toBe(null);
  });

  test('should return an array containing all edges', () => {
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    A.addEdge(AB);
    A.addEdge(AC);

    expect(A.getEdges()).toEqual(expect.arrayContaining([AB, AC]));
  });

  test('should return true if vertex has specific neighbor', () => {
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');
    const D = new Vertex('D');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    A.addEdge(AB);
    A.addEdge(AC);

    expect(A.hasNeighbor(B)).toBe(true);
    expect(A.hasNeighbor(C)).toBe(true);
    expect(A.hasNeighbor(D)).toBe(false);
  });

  test('should return an array containing all neighbor vertices', () => {
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    A.addEdge(AB);
    A.addEdge(AC);

    expect(A.getAllNeighbors()).toEqual(expect.arrayContaining([B, C]));
  });

  test('should not store any edges if all is deleted', () => {
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    A.addEdge(AB);
    A.addEdge(AC);

    A.deleteAllEdges();

    expect(A.hasEdge(AB)).toBe(false);
    expect(A.hasEdge(AC)).toBe(false);
  });
});
