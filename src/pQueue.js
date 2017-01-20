'use strict'

export default class PQueue {
  constructor() {
    this.elements = []
  }

  enqueue(element, priority) {
    this.elements[this.elements.length] = {element, priority}
    const sorted = this.elements.sort((a, b) => {
      return parseFloat(b.priority) - parseFloat(a.priority)
    })
    return sorted
  }

  front() {
    return this.elements[0] !== undefined ? this.elements[0] : null
  }

  back() {
    return this.elements.length > 0 ? this.elements[this.elements.length-1] : null
  }

  dequeue() {
    return this.elements.length > 0 ? this.elements.shift(0) : null
  }

  isEmpty() {
    return this.elements.length < 1
  }

  length() {
    return this.elements.length
  }
}
