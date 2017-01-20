'use strict'

export default class Queue {
  constructor() {
    this.elements = []
  }

  enqueue(element) {
    return this.elements[this.elements.length] = element
  }

  dequeue() {
    return this.elements.shift(0)
  }

  front() {
    return this.elements.length > 0 ? this.elements[0] : null
  }

  back() {
    return this.elements.length > 0 ? this.elements[this.elements.length-1] : null
  }

  isEmpty() {
    return this.elements.length < 1
  }

  length() {
    return this.elements.length
  }
}
