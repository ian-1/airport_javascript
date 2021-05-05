class Airport {
  constructor() {
    this.DEFAULT_CAPACITY = 22
    this.planesList = []
  };

  capacity() {
    return this.DEFAULT_CAPACITY;
  };

  planes() {
    return this.planesList;
  };

  changeCapacity(newCapactity) {
    this.DEFAULT_CAPACITY = newCapactity
  };

  land(plane) {
    this.planesList.push(plane)
  }
}
