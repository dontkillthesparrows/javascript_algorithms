class Vertex {
  constructor(value) {
    this.value = value;
    this.edges = new Set();
  }

  addEdge(edge) {
    /*

    */
    this.edges.add(edge);

    return this;
  }

  deleteEdge(edge) {
    this.edges.delete(edge);
  }

  hasEdge(edge) {
    return this.edges.has(edge);
  }

  findEdge(vertex) {
    const finder = (edge) => {
      return edge.start === vertex || edge.end === vertex;
    };

    const edge = [...this.edges].find(finder);

    return edge ? edge : null;
  }

  getEdges() {
    return [...this.edges];
  }

  hasNeighbor(vertex) {
    return [...this.edges].some(
      ({ start, end }) =>
        start.value === vertex.value || end.value === vertex.value
    );
  }

  getAllNeighbors() {
    return [...this.edges].map((edge) =>
      edge.start !== this ? edge.start : edge.end
    );
  }

  deleteAllEdges() {
    return this.edges.clear();
  }

  getValue() {
    return `${this.value}`;
  }

  toString() {
    return this.getValue();
  }
}

module.exports = Vertex;
