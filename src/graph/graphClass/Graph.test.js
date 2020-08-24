const Graph = require('./Graph');
const Vertex = require('./Vertex');
const Edge = require('./Edge');

describe('should have correct implementation', () => {
  test('should be defined', () => {
    const graph = new Graph();

    expect(graph).toBeDefined();
  });

  test('should add, get and delete vertices', () => {
    const graph = new Graph();
    const A = new Vertex('A');
    const B = new Vertex('B');

    graph.addVertex(A);
    graph.addVertex(B);

    expect(graph.hasVertex(A)).toBe(true);
    expect(graph.hasVertex(B)).toBe(true);

    expect(graph.getVertex('A')).toBe(A);
    expect(graph.getVertex('B')).toBe(B);

    expect(graph.deleteVertex(A)).toBe(true);
    expect(graph.deleteVertex(A)).toBe(false);

    expect(graph.hasVertex(A)).toBe(false);
    expect(graph.hasVertex(B)).toBe(true);
  });

  test('should add adges to class and, if NOT directed, to its vertices', () => {
    const graph = new Graph();

    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    graph.addEdge(AB);
    graph.addEdge(AC);

    expect(graph.hasEdge(AB)).toBe(true);
    expect(graph.hasEdge(AC)).toBe(true);

    expect(A.hasEdge(AB)).toBe(true);
    expect(B.hasEdge(AB)).toBe(true);
    expect(A.hasEdge(AC)).toBe(true);
    expect(C.hasEdge(AC)).toBe(true);
  });

  test('should add adges to class and, if directed, to its start vertex', () => {
    const graph = new Graph(true);

    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    graph.addEdge(AB);
    graph.addEdge(AC);

    expect(graph.hasEdge(AB)).toBe(true);
    expect(graph.hasEdge(AC)).toBe(true);

    expect(A.hasEdge(AB)).toBe(true);
    expect(B.hasEdge(AB)).toBe(false);
    expect(A.hasEdge(AC)).toBe(true);
    expect(C.hasEdge(AC)).toBe(false);
  });

  test('should delete edge in graph and, if NOT directed, both vertices', () => {
    const graph = new Graph();

    const A = new Vertex('A');
    const B = new Vertex('B');

    const AB = new Edge(A, B);

    graph.addEdge(AB);

    expect(graph.hasEdge(AB)).toBe(true);
    expect(A.hasEdge(AB)).toBe(true);
    expect(B.hasEdge(AB)).toBe(true);

    expect(graph.deleteEdge(AB)).toBe(true);
    expect(graph.deleteEdge(AB)).toBe(false);

    expect(graph.hasEdge(AB)).toBe(false);
    expect(A.hasEdge(AB)).toBe(false);
    expect(B.hasEdge(AB)).toBe(false);
  });

  test('should delete edge in graph and, if directed, its start vertex', () => {
    const graph = new Graph(true);

    const A = new Vertex('A');
    const B = new Vertex('B');

    const AB = new Edge(A, B);

    graph.addEdge(AB);

    expect(graph.hasEdge(AB)).toBe(true);
    expect(A.hasEdge(AB)).toBe(true);
    expect(B.hasEdge(AB)).toBe(false);

    expect(graph.deleteEdge(AB)).toBe(true);
    expect(graph.deleteEdge(AB)).toBe(false);

    expect(graph.hasEdge(AB)).toBe(false);
    expect(A.hasEdge(AB)).toBe(false);
  });

  test('should find edge given two specific vertices', () => {
    const graph = new Graph();

    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    graph.addEdge(AB);
    graph.addEdge(AC);

    expect(graph.findEdge(A, B)).toBe(AB);
    expect(graph.findEdge(A, C)).toBe(AC);
    expect(graph.findEdge(B, C)).toBe(null);
  });

  test('should return array with all vertices', () => {
    const graph = new Graph();

    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');
    const D = new Vertex('D');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    graph.addEdge(AB);
    graph.addEdge(AC);
    graph.addVertex(D);

    expect(graph.getAllVertices()).toEqual(
      expect.arrayContaining([A, B, C, D])
    );
  });

  test('should return array with all edges', () => {
    const graph = new Graph();

    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');
    const D = new Vertex('D');

    const AB = new Edge(A, B);
    const AC = new Edge(A, C);

    graph.addEdge(AB);
    graph.addEdge(AC);
    graph.addVertex(D);

    expect(graph.getAllEdges()).toEqual(expect.arrayContaining([AB, AC]));
  });
});
