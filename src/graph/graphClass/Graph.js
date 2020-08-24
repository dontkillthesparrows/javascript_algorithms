class Graph {
  constructor(isDirected = false) {
    this.vertices = new Map();
    this.edges = new Set();
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    this.vertices.set(vertex.getValue(), vertex);

    return this;
  }

  hasVertex(vertex) {
    return this.vertices.has(vertex.getValue());
  }

  getVertex(key) {
    return this.vertices.has(key) ? this.vertices.get(key) : null;
  }

  getAllVertices() {
    return [...this.vertices].map(([key, vertex]) => vertex);
  }

  deleteVertex(vertex) {
    return this.vertices.delete(vertex.getValue());
  }

  addEdge(edge) {
    this.addVertex(edge.start);
    this.addVertex(edge.end);

    if (!this.edges.add(edge)) throw new Error('edge already exists');

    if (this.isDirected) {
      edge.start.addEdge(edge);
    } else {
      edge.start.addEdge(edge);
      edge.end.addEdge(edge);
    }

    return this;
  }

  hasEdge(edge) {
    return this.edges.has(edge);
  }

  getAllEdges() {
    return [...this.edges];
  }

  deleteEdge(edge) {
    if (this.isDirected) {
      edge.start.deleteEdge(edge);
    } else {
      edge.start.deleteEdge(edge);
      edge.end.deleteEdge(edge);
    }

    return this.edges.delete(edge);
  }

  findEdge(startVertex, endVertex) {
    const finder = (edge) => {
      return edge.start === startVertex && edge.end === endVertex;
    };

    const edge = [...this.edges].find(finder);

    return edge ? edge : null;
  }
}

module.exports = Graph;
