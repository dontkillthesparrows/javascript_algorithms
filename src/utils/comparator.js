class Comparator {
  constructor(comparatoFuntion) {
    this.compare = comparatoFuntion || Comparator.defaultCompare;
  }

  static defaultCompare(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  greaterThan(a, b) {
    return this.compare(a, b) === 1;
  }

  lessThan(a, b) {
    return this.compare(a, b) === -1;
  }

  greaterThanOrEqualTo(a, b) {
    return this.compare(a, b) === 1 || this.compare(a, b) === 0;
  }

  lessThanOrEqualTo(a, b) {
    return this.compare(a, b) === -1 || this.compare(a, b) === 0;
  }
}

module.exports = Comparator;
