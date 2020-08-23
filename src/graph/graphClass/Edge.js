class Edge {
  constructor(startVertex, endVertex, weight = 0) {
    this.start = startVertex;
    this.end = endVertex;
    this.weight = weight;
  }

  getKey() {
    return `${this.start.getValue()}_${this.end.getValue()}`;
  }

  toString() {
    return this.getKey();
  }
}

module.exports = Edge;
